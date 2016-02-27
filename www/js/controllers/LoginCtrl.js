app.controller('LoginCtrl', function ($rootScope, $scope, $state, $ionicHistory, $ionicLoading, $timeout, $ionicPopup, $window) {
  $scope.currentUser = {};
  $scope.login = function(){

    $ionicLoading.show({
      template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    Parse.User.logIn($scope.currentUser.username, $scope.currentUser.password, {
      success: function(user) {
        // Do stuff after successful login.
        $ionicLoading.hide();
        $ionicHistory.nextViewOptions({
          disableBack: true
        });
        $rootScope.isLogged = true;
        $state.go('app.home');
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        console.log(error);
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Login Error',
          template: error.message
        });

      }
    });
  }

  $scope.signup = function(){
    $ionicLoading.show({
      template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    var user = new Parse.User();
    user.set("username", $scope.currentUser.username);
    user.set("password", $scope.currentUser.password);

    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
        $ionicLoading.hide();
        $ionicHistory.nextViewOptions({
          disableBack: true
        });
        $rootScope.isLogged = true;
        $state.go('app.home');
      },
      error: function(user, error) {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Signup Error',
          template: error.message
        });
      }
    });
  }
  console.log('hello login page');
});
