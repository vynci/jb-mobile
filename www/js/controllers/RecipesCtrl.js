app.controller('RecipesCtrl', function ($scope, $stateParams, recipeService) {
    $scope.isLoading = true;
   
    $scope.recipes = [];
    recipeService.getRecipes()
        .then(function(results) {
        // Handle the result
        console.log(results);
        $scope.isLoading = false;
        
        $scope.recipes = results;
        return results;
        }, function(err) {
        // Error occurred
        console.log(err);
        }, function(percentComplete) {
            console.log(percentComplete);
    });

});
