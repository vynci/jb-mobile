app.controller('ProfileCtrl', function ($scope, $stateParams, ionicMaterialMotion) {

  console.log('hello profile');
  var currentUser = Parse.User.current();

  $scope.profile = currentUser.attributes;

});
