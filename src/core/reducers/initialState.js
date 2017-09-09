export default {
    home: {},
    mealPlanner:{
        isFetching: true,
        isAdvanced: false,
        errorInFetch: null,
        isChangeRecipeModalOpen: false,
        profile: {
            "nutrientsPerDay": {
              "carbohydrates": 'average',
              "fat": 'low',
              "protein": 'high',
              "calories": 1800
            },
            "mealsPerDay": 3,
            "recipesPerMeal": 2,
            "restrictions": {
              "isVegan": false,
              "isVegetarian": true,
              "isLactose": false
            }
        },
        substituteRecipe : {
            isFetching: false,
            meal: -1,
            recipe: -1,
            recipePlan: {}
        }
    }
}
