app.directive('deploymentImage', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/deploymentImage.html'
  };
});
