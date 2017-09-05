import * as types from './actionTypes';

export function openChangeRecipeModal() {
    return { type: types.CHANGE_RECIPE_MODAL_OPEN };
}

export function closeChangeRecipeModal() {
    return { type: types.CHANGE_RECIPE_MODAL_CLOSE };
}
