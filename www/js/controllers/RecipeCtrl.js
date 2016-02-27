app.controller('RecipeCtrl', function ($scope, $stateParams, recipeService, socket, ionicMaterialMotion, $timeout, $ionicLoading) {

  $ionicLoading.show({
    template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
  });

  $scope.currentUser = Parse.User.current();

  $scope.profile = $scope.currentUser.attributes;


  $scope.comments = [];
  $scope.commentModel = {
    "user": {
      "name" : $scope.profile.name,
      "avatar" : $scope.profile.avatar
    },
    "comment" : "",
    "likes" : 0,
    "date" : ""
  }


  recipeService.getRecipe($stateParams.recipeId)
  .then(function(results) {

    $ionicLoading.hide();

    $scope.recipe = results[0];
    $scope.comments = results[0].attributes.comments;
    return results;
  }, function(err) {
    // Error occurred
    console.log(err);
  });

  $scope.isCommentSection = false;
  $scope.makeDrink = function(){
    $ionicLoading.show({
      template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });

    // For example's sake, hide the sheet after two seconds
    $timeout(function() {
      $ionicLoading.hide();
      socket.emit('toPublicServer', $scope.recipe.attributes.recipe);
    }, 2000);

  }

  $scope.showComment = function(){
    if($scope.isCommentSection){
      $scope.isCommentSection = false;
    } else {
      $scope.isCommentSection = true;
    }

  }

  $scope.sendComment = function(){
    if($scope.commentModel.comment !== ""){
      var date = Date();
      date = date.split(' ');
      date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];

      console.log(date);

      $scope.commentModel.date = date;

      var tmp = angular.toJson($scope.commentModel);
      jsonObj = JSON.parse(tmp);
      $scope.comments.push(jsonObj);

      tmp = angular.toJson($scope.comments);
      jsonObj = JSON.parse(tmp);

      $scope.recipe.set('comments', jsonObj);
      $scope.recipe.save(null, {
        success : function( results ){

        }
      });
      $scope.commentModel.comment = "";
      $scope.commentModel.date = "";
    }
  }

});
