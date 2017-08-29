export default {
    home: {},
    mealPlanner:{
        isFetching: true,
        errorInFetch: null,
        buildPlan:{
          "numberOfDays": 1,
          "profile": {
            "nutrientsPerDay": {
              "carbohydrates": 202,
              "fat": 50,
              "protein": 135,
              "calories": 1800
            },
            "mealsPerDay": 3,
            "recipesPerMeal": 2,
            "restrictions": {
              "isVegan": false,
              "isVegetarian": true,
              "isLactose": false
            }
          }
      },
      substituteRecipe : {
          "profile": {
              "mealsPerDay": 3,
              "recipesPerMeal": 2,
              "restrictions": {
                "isVegan": false,
                "isVegetarian": true,
                "isLactose": false
              }
          }
        //   "profile": {
        //     "nutrientsPerDay": {
        //       "carbohydrates": 202,
        //       "fat": 50,
        //       "protein": 135,
        //       "calories": 1800
        //     },

        //   },
      }
    }
}
