var app = angular.module('bbcalc', []);

app.controller('main', function($scope,$http) {
    $http.get('/js/data.json').success(function(data) {
      $scope.data = data;
    });
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
                fsmf =  fsmf + 1;
            }
            else if (value==="FBBA") {
                fbba =  fbba + 1;
            }
            else if (value==="FBBC") {
                fbbc =  fbbc + 1;
            }
            else if (value==="FBBA/C") {
                fbbac =  fbbac + 1;
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
});
