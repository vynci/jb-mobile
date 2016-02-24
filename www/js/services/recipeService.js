app.service('recipeService', function() {
	var recipeList = [
		{
			'id' : 1,
			'name' : 'Sunrise Smoothie',
			'avatar': 'img/recipes/sunrise-smoothie.jpg',
			'description': 'A refreshing blend of carrots, milk and cinammon',
			'recipe': '40000,40000,40000'
		},
		{
			'id' : 2,
			'name' : 'Green Zest',
			'avatar': 'img/recipes/green-zest2.jpg',
			'description': 'A fresh mix of mint and lime topped with a hint of parsley.',
			'recipe': '4000,5000,7000'
		},
		{
			'id' : 3,
			'name' : 'Lemon Drop',
			'avatar': 'img/recipes/lemon-drop.jpg',
			'description': 'A healthy dose of lemon, bannas and milk',
			'recipe': '8000,4000,6000'
		},
		{
			'id' : 4,
			'name' : 'Agent Orange',
			'avatar': 'img/recipes/agent-orange.jpg',
			'description': 'A soothing mixture of oranges, peaches and apples.',
			'recipe': '7500,5300,8000'
		},
		{
			'id' : 5,
			'name' : 'Blueberry Apple',
			'avatar': 'img/recipes/blueberry-apple.jpg',
			'description': 'A soothing mixture of blueberries and apple with a hint of mint.',
			'recipe': '20000,80000,40000'
		}
	];

	var getRecipe = function(id) {
		return recipeList[id-1];
	};

	var getRecipes = function(){
		return recipeList;
	};

	return {
		getRecipe: getRecipe,
		getRecipes: getRecipes
	};

});
