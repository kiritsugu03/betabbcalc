var app = angular.module('bbcalc', []);

app.controller('main', function($scope,$http) {
    $http.get('/js/data.json').success(function(data) {
      $scope.data = data;
    });

    $scope.isGsmOn = false;
    $scope.objFilter = {
        deployment1: {
            fsmf1: "",
            fbbx1: "",
            fbbx2: ""
        },
        deployment2: {
            fsmf1: "",
            fbbx1: "",
            fbbx2: ""
        }
    }

    $scope.filterRcs = function(item){
        if ($scope.isLteOn) {
            if ($scope.isRcsOn)
            {
              return !(item.lteBbCapacity.rcs === null || item.lteBbCapacity.rcs.trim().length === 0)
            }
        }
        return true;
    }
    $scope.filterEcs = function(item){
        if ($scope.isLteOn) {
            if ($scope.isEcsOn)
            {
              return !(item.lteBbCapacity.ecs === null || item.lteBbCapacity.ecs.trim().length === 0)
            }
        }
        return true;
    }
    $scope.filterBcs = function(item){
        if ($scope.isLteOn) {
            if ($scope.isBcsOn)
            {
              return !(item.lteBbCapacity.bcs === null || item.lteBbCapacity.bcs.trim().length === 0)
            }
        }
        return true;
    }
    $scope.getSummary = function(config){
        var summary = {
            fsmf : "",
            fbba : "",
            fbbc : "",
            fbbac : "",
            bcs : "",
            ecs : "",
            rcs : "",
            gsmTrx : ""
        }
        var mods = config.sbtsSmConfiguration.split('+');
        var fsmf = 0;
        var fbba = 0;
        var fbbc = 0;
        var fbbac = 0;
        angular.forEach(mods, function(value){
            if (value==="FSMF") {
                fsmf++;
            }
            else if (value==="FBBA") {
                fbba++;
            }
            else if (value==="FBBC") {
                fbbc++;
            }
            else if (value==="FBBA/C") {
                fbbac++;
            }
        });

        summary.fsmf = fsmf ? fsmf+"XFSMF":"";
        summary.fbba = fbba ? fbba+"XFBBA":"";
        summary.fbbc = fbbc ? fbbc+"XFBBC":"";
        summary.fbbac = fbbac ? fbbac+"XFBBA/C":"";
        summary.bcs = config.lteBbCapacity.bcs ? config.lteBbCapacity.bcs+"XBCS":"";
        summary.ecs = config.lteBbCapacity.ecs ? config.lteBbCapacity.ecs+"XECS":"";
        summary.rcs = config.lteBbCapacity.rcs ? config.lteBbCapacity.rcs+"XRCS":"";
        summary.gsmTrx = config.gsmBbCapacity ? config.gsmBbCapacity+"TRX":"";

        return summary;
    }
    $scope.buildConfiguration = function() {
        if ($scope.fbbx1) {
            $scope.objFilter.sbtsSmConfiguration += '+' + $scope.fbbx1;
        }
    }
    $scope.filterConfigs = function(item) {
            var mods = item.sbtsSmConfiguration.split('+');
        if ($scope.isFsmf) {
            var config = "";
            config += $scope.objFilter.deployment1.fsmf1 ? $scope.objFilter.deployment1.fsmf1:'';
            config += $scope.objFilter.deployment1.fbbx1 ? '+'+$scope.objFilter.deployment1.fbbx1:'';
            config += $scope.objFilter.deployment1.fbbx2 ? '+'+$scope.objFilter.deployment1.fbbx2:'';
            config += $scope.objFilter.deployment2.fsmf1 ? '+'+$scope.objFilter.deployment2.fsmf1:'';
            config += $scope.objFilter.deployment2.fbbx1 ? '+'+$scope.objFilter.deployment2.fbbx1:'';
            config += $scope.objFilter.deployment2.fbbx2 ? '+'+$scope.objFilter.deployment2.fbbx2:'';
            console.log(config);
            config = config.split('+');
            for(var i=0;i<config.length;i++)
            {
                if (mods[i]===config[i])
                {
                    continue;
                }
                else if (mods[i]==="FBBA/C" && (config[i]==="FBBA" || config[i]==="FBBC")){
                    continue;
                }
                else {
                    return false;
                }
            }
            return true;
        }
        return true;
    }
    $scope.toggleDeployment2 = function() {
        $scope.isFsmf2 =  !$scope.isFsmf2;
       
        if ($scope.isFsmf2) {
              $scope.objFilter.deployment2.fsmf1 = 'FSMF';
        }

        else {
            $scope.objFilter.deployment2.fsmf1 = '';
            $scope.objFilter.deployment2.fbbx1 = '';
            $scope.objFilter.deployment2.fbbx2 = '';
        }
    }

    $scope.toggleDeployment1 = function() {
        $scope.isFsmf =  !$scope.isFsmf;
       
        if ($scope.isFsmf) {
              $scope.objFilter.deployment1.fsmf1 = 'FSMF';
        }

        else {
            $scope.objFilter.deployment1.fsmf1 = '';
            $scope.objFilter.deployment1.fbbx1 = '';
            $scope.objFilter.deployment1.fbbx2 = '';
            $scope.objFilter.deployment2.fsmf1 = '';
            $scope.objFilter.deployment2.fbbx1 = '';
            $scope.objFilter.deployment2.fbbx2 = '';
        }
    }
});
