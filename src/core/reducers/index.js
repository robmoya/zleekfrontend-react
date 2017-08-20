import { combineReducers } from 'redux';
import mealPlannerReducer from './mealPlannerReducer';

const rootReducer = combineReducers({
    mealPlanner: mealPlannerReducer
})

export default rootReducer
