import * as types from './actionTypes';
import ZleekApi from '../../api/zleekApi';

export function fetchDayPlan(payload) {
    payload.fn = 'buildPlan';
    return function (dispatch) {
        dispatch({
            type: types.FETCH_DAY_PLAN
        });
        ZleekApi.getMealPlan(payload).then((data) => {
            if (data.err) {
                dispatch(fetchDayPlanError(data.err));
            } else {
                dispatch(receiveDayPlan(data));
            }
        }).catch((err) => {
            dispatch(fetchDayPlanError(err))
        });
    }
}

export function fetchDayPlanError(payload) {
    return {
        type: types.FETCH_DAY_PLAN_ERROR,
        payload: payload
    }
}

export function receiveDayPlan(payload) {
    return {
        type: types.RECEIVE_DAY_PLAN,
        payload: payload
    }
}

export function substituteRecipe(payload) {
    payload.fn = 'substituteRecipe';
    return function (dispatch) {
        dispatch({
            type: types.FETCH_DAY_PLAN
        });
        ZleekApi.getMealPlan(payload).then((data) => {
            if (data.err) {
                dispatch(fetchDayPlanError(data.err));
            } else {
                dispatch(receiveDayPlan(data));
            }
        }).catch((err) => {
            dispatch(fetchDayPlanError(err))
        });
    }
}

export function replaceRecipe(payload) {
    return {
        type: types.SUBSTITUTE_RECIPE,
        payload: payload
    }
}
