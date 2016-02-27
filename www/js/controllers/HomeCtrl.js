app.controller('HomeCtrl', function ($scope, $stateParams, ionicMaterialMotion, socket, $window) {
  
  socket.on('fromPublicServer', function ( data ) {
    console.log(data);
  });

  var todaysDrink = {
    'name' : 'Sunrise Smoothie',
    'description': 'Based on your health profile and your health preferences, we recommend you drinking a tasty new sunrise smoothie to brighten up your day.',
    'recipe': '40000,40000,40000'
  }

  $scope.todaysDrinkCard = todaysDrink;

  $scope.makeDrink = function(){
    socket.emit('toPublicServer', todaysDrink.recipe);
  }
  console.log('hello home page');
});
