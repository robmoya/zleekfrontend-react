import * as types from './actionTypes';
import ZleekApi from '../../api/zleekApi';

export function fetchDayPlan(payload) {
    payload.fn = 'buildPlan';
    console.dir(payload);
    return function (dispatch) {
        dispatch({
            type: types.FETCH_DAY_PLAN
        });
        ZleekApi.getMealPlan(payload).then((data) => {
            if (data.err) {
                dispatch(fetchDayPlanError(data.err));
            } else {
                dispatch(receiveDayPlan(data, payload));
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

export function receiveDayPlan(payload, request) {
    return {
        type: types.RECEIVE_DAY_PLAN,
        payload: payload,
        request: request
    }
}

export function substituteRecipe(payload) {
    payload.fn = 'substituteRecipe';

    return function (dispatch) {
        dispatch({
            type: types.FETCH_SUBSTITUTE_RECIPE,
            payload: {
                marker: { ...payload.marker }
            }
        });
        ZleekApi.getMealPlan(payload).then((data) => {
            if (data.err) {
                dispatch(fetchDayPlanError(data.err));
            } else {
                console.log(data);
                const recipePlan = data.dayPlans[payload.marker.day].mealPlans[payload.marker.meal].recipePlans[payload.marker.recipe];
                dispatch({
                    type: types.RECEIVE_SUBSTITUTE_RECIPE,
                    payload: {
                        marker: { ...payload.marker },
                        dayPlans: data.dayPlans[0],
                        recipePlan: recipePlan
                    }
                });
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
