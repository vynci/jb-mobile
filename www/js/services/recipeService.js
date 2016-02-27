app.service('recipeService', function($q) {

	var getRecipe = function(id) {
		var defer = $q.defer();
		var RecipeObject = Parse.Object.extend("Recipe");
		var query = new Parse.Query(RecipeObject);
		query.equalTo("objectId", id);
		query.find({
			success: function(results) {
				console.log(results);
				defer.resolve(results);
			},
			error: function(error) {
				defer.reject(error);
				alert("Error: " + error.code + " " + error.message);
			}
		});
		return defer.promise;
	};

	var getRecipes = function(){
    var defer = $q.defer();
    var RecipeObject = Parse.Object.extend("Recipe");
    var query = new Parse.Query(RecipeObject);
    // query.equalTo("name", 'Blueberry Apple');
    query.find({
        success: function(results) {
            console.log(results);
            defer.resolve(results);
        },
        error: function(error) {
            defer.reject(error);
            alert("Error: " + error.code + " " + error.message);
        }
    });
    return defer.promise;
	};

	return {
		getRecipe: getRecipe,
		getRecipes: getRecipes
	};

});
