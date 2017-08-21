import initialState from './initialState';
import * as types from '../actions/actionTypes';

const mealPlanReducer = (state= initialState.mealPlanner, action) => {
    switch(action.type){
        case types.FETCH_DAY_PLAN: {
            state = {...state,
                isFetched:false,
                error: false
            }
            break;
        }
        case types.FETCH_DAY_PLAN_ERROR: {
            state = {...state,
                isFetched: false,
                error: action.payload
            }
            break;
        }
        case types.RECEIVE_DAY_PLAN: {
            state = {...state,
                isFetched: true,
                error: false,
                dayPlans: [action.payload.dayPlans[0]]
            }
            break;
        }
        case types.CREATE_MEAL_PLAN: {
            // state = {...state,
            //     buildNewPlan: {
            //         numberOfDays: action.mealsPerDay,
            //         recipesPerMeal: action.recipesPerMeal
            //     }
            // }
            break;
        }
        case types.SUBSTITUTE_RECIPE : {
            // state = {...state,
            //     replaceRecipe: {
            //         recipeId: action.recipeToReplace
            //     }
            // }
            break;
        }
        default: break
    }
    return state
}

export default mealPlanReducer
