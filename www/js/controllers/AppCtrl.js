app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

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
});
