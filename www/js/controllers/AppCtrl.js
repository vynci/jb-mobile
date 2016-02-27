app.controller('AppCtrl', function ($rootScope, $scope, $ionicModal, $ionicPopover, $timeout, $ionicHistory, $state, $ionicLoading, $window) {
    // Form data for the login modal
    if(Parse.User.current()){
      $rootScope.isLogged = true;
    }

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">Healthy Tip!</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       <b>Tomato</b> is a superstar in the fruit and veggie pantheon. Tomatoes contain lycopene, a powerful cancer fighter. <br><br> The good news is that cooked tomatoes are also nutritious, so use them in pasta, soups and casseroles, as well as in salads.' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });

    $scope.logout = function(){
      $ionicLoading.show({
        template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
      });

      Parse.User.logOut().then(
        function() {
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          $state.go('app.login', {}, {reload: false}).then(function(){
            setTimeout(function() {
              $window.location.reload(true);
            });
          });
          $rootScope.isLogged = false;
          $ionicLoading.hide();
        }, function(error) {
          alert('error : ' + error);
          $ionicLoading.hide();
        }
      );

    }
});
