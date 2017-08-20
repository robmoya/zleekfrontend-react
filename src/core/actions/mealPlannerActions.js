import * as types from './actionTypes';

export function fetchMealPlan (mealPlan){
    return {
        type: types.FETCH_MEAL_PLAN,
        myMealPlan: mealPlan
    }
}

export function fetchMealPlanError (){
    return {
        type: types.FETCH_MEAL_PLAN_ERROR,
    }
}

export function receiveMealPlan (mealPlan){
    return {
        type: types.RECEIVE_MEAL_PLAN,
        myMealPlan: mealPlan
    }
}

export function createMealPlan (newPlan){
    return {
        type: types.CREATE_MEAL_PLAN,
        buildNewPlan: newPlan
    }
}

export function replaceRecipe (recipe){
    return {
        type: types.SUBSTITUTE_RECIPE
    }
}







// case "FETCH_MEAL_PLAN_ERROR": {
