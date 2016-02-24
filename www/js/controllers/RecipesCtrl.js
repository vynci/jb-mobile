app.controller('RecipesCtrl', function ($scope, $stateParams, ionicMaterialMotion, recipeService) {

  $scope.recipes = recipeService.getRecipes();

});
