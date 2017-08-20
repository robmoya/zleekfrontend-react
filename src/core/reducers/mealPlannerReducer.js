import initialState from './initialState';
import * as types from '../actions/actionTypes';

const mealPlanReducer = (state= initialState.mealPlanner, action) => {
    switch(action.type){
        case types.FETCH_MEAL_PLAN: {
            state = {...state,
                fetching: true,
                myMealPlan: {
                    numberOfDays: action.myMealPlan.mealsPerDay,
                    recipesPerMeal: action.myMealPlan.recipesPerMeal,
                }
            }
            break;
        }
        case types.FETCH_MEAL_PLAN_ERROR: {
            state = {...state,
                fetching: false,
                error: action.payload
            }
            break;
        }
        case types.RECEIVE_MEAL_PLAN: {
            state = {...state,
                fetched: true,
                fetching: false,
                myMealPlan: action.payload
            }
            break;
        }
        case types.CREATE_MEAL_PLAN: {
            state = {...state,
                buildNewPlan: {
                    numberOfDays: action.mealsPerDay,
                    recipesPerMeal: action.recipesPerMeal
                }
            }
            break;
        }
        case types.SUBSTITUTE_RECIPE : {
            state = {...state,
                replaceRecipe: {
                    recipeId: action.recipeToReplace
                }
            }
            break;
        }
        default: break
    }
    return state
}

export default mealPlanReducer
