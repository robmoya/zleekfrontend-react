import initialState from './initialState';
import * as types from '../actions/actionTypes';

const mealPlanReducer = (state = initialState.mealPlanner, action) => {
    switch (action.type) {
        case types.FETCH_DAY_PLAN: {
            state = Object.assign({}, state, {
                isFetching: true,
                errorInFetch: false
            });
            break;
        }
        case types.FETCH_DAY_PLAN_ERROR: {
            state = Object.assign({},state, {
                isFetching: false,
                errorInFetch: true,
                errorMessage: action.payload
            });
            break;
        }
        case types.RECEIVE_DAY_PLAN: {
            state = Object.assign({}, state, {
                isFetching: false,
                errorInFetch: false,
                descriptor: action.payload.descriptor,
                dayPlans: [action.payload.dayPlans[0]]
            });
            break;
        }
        // case types.BUILD_MEAL_PLAN: {
        //     state = {
        //         ...state,
        //         isFetching: true,
        //         errorInFetch: false
        //     }
        //     break;
        // }
        case types.FETCH_SUBSTITUTE_RECIPE: {
            console.log("fetch recipe");
            // state = Object.assign({}, state, {
            //     substituteRecipe: {
            //         isFetching: true,
            //         meal: action.payload.marker.meal,
            //         recipe: action.payload.marker.recipe
            //     }
            // });
            break;
        }
        case types.RECEIVE_SUBSTITUTE_RECIPE: {
            console.log("receive recipe");
            // state = Object.assign({}, state, {
            //     dayPlans: [action.payload.dayPlans],
            //     substituteRecipe: {
            //         isFetching: false,
            //         meal: action.payload.marker.meal,
            //         recipe: action.payload.marker.recipe,
            //         recipePlan: action.payload.recipePlan
            //     }
            // });
            break;
        }
        case types.CHANGE_RECIPE_MODAL_OPEN:
            return Object.assign({}, state, { isChangeRecipeModalOpen: true });

        case types.CHANGE_RECIPE_MODAL_CLOSE:
            return Object.assign({}, state, { isChangeRecipeModalOpen: false });

        default: break
    }

    return state
}

export default mealPlanReducer
