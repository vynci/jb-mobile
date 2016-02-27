app.controller('RecipesCtrl', function ($scope, $stateParams, recipeService, $ionicLoading) {
    $ionicLoading.show({
      template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });
    $scope.recipes = [];
    recipeService.getRecipes()
        .then(function(results) {
        // Handle the result
        console.log(results);
        $ionicLoading.hide();

        $scope.recipes = results;
        return results;
        }, function(err) {
        // Error occurred
        console.log(err);
        }, function(percentComplete) {
            console.log(percentComplete);
    });

});
