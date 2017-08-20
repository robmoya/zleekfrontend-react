const mealPlanReducer = (state= [], action) => {
    switch(action.type){
        case "CREATE_MEAL_PLAN": {
            state = {...state,
                buildNewPlan: {
                    numberOfDays: action.mealsPerDay,
                    recipesPerMeal: action.recipesPerMeal
                }
            }
            break;
        }
        case "SUBSTITUTE_RECIPE" : {
            state = {...state,
                replaceRecipe: {
                    recipeId: action.recipeToReplace
                }
            }
            break;
        }
    }
    return state
}

export default mealPlanReducer
