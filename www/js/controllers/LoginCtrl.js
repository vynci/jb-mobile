app.controller('LoginCtrl', function ($scope, $state, $ionicHistory, $ionicLoading, $timeout) {
  $scope.login = function(){

    $ionicLoading.show({
      template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    // For example's sake, hide the sheet after two seconds
    $timeout(function() {
      $ionicLoading.hide();
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go('app.home');
    }, 2000);

  }
  console.log('hello login page');
});
