export default {
    home: {},
    mealPlanner:{
        isFetching: true,
        isAdvanced: false,
        errorInFetch: null,
        isChangeRecipeModalOpen: false,
        profile: {
            "nutrientsPerDay": {
              "carbohydrates": 0.25,
              "fat": 0.25,
              "protein": 0.5,
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
