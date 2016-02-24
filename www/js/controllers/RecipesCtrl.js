app.controller('RecipesCtrl', function ($scope, $stateParams, recipeService) {

  $scope.recipes = recipeService.getRecipes();

});
