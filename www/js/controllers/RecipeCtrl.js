app.controller('RecipeCtrl', function ($scope, $stateParams, recipeService, socket, ionicMaterialMotion, $timeout, $ionicLoading) {

  $scope.recipe = recipeService.getRecipe($stateParams.recipeId);
  $scope.isCommentSection = false;
  $scope.makeDrink = function(){
    $ionicLoading.show({
      template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    // For example's sake, hide the sheet after two seconds
    $timeout(function() {
      $ionicLoading.hide();
      socket.emit('toPublicServer', $scope.recipe.recipe);
    }, 2000);

  }

  $scope.showComment = function(){
    $scope.isCommentSection = true;
    console.log('hello');
  }

});
