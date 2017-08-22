export default {
    home: {},
    mealPlanner:{
        isFetched: false,
        error:null,
        buildPlan:{
            fn: "buildPlan",
            numberOfDays: 1,
            profile: {
              nutrientsPerDay: {
                carbohydrates: 0,
                fat: 0,
                protein: 0,
                calories: 0
              },
              mealsPerDay: 1,
              recipesPerMeal: 1,
              restrictions: {
                isVegan: false,
                isVegetarian: true,
                isLactose: false
              }
            }
        }
    }
}
