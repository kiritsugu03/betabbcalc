var app = angular.module('bbcalc', []);

app.controller('main', function($scope,$http) {
    $http.get('../data.json').success(function(data) {
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
});
