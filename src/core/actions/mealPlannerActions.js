import * as types from './actionTypes';
import ZleekApi from '../../api/zleekApi';

export function fetchDayPlan (payload){
    return function(dispatch){
        ZleekApi.getMealPlan(payload).then((data) => {
            dispatch(receiveDayPlan(data));
        }).catch((error) => {
            dispatch(fetchDayPlanError(error))
        });
    }
}

export function fetchDayPlanError (payload){
    console.log("Api Call Error");
    return {
        type: types.FETCH_DAY_PLAN_ERROR,
        payload: payload
    }
}

export function receiveDayPlan (payload){
    return {
        type: types.RECEIVE_DAY_PLAN,
        payload:payload
    }
}

export function createMealPlan (payload){
    return {
        type: types.CREATE_MEAL_PLAN,
        payload: payload
    }
}

export function replaceRecipe (payload){
    return {
        type: types.SUBSTITUTE_RECIPE,
        payload: payload
    }
}