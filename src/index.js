import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './core/store/configureStore';
import { createBrowserHistory } from 'history'
import HomePage from './components/HomePage';
import MealPlanner from './components/MealPlanner';
import './style.css';

const history = createBrowserHistory({});
const store = configureStore();

//
store.subscribe(()=>{
    console.log('store changed', store.getState());
})

store.dispatch({"type":"CREATE_MEAL_PLAN", "mealsPerDay": 2, "recipesPerMeal": 3})
store.dispatch({"type":"SUBSTITUTE_RECIPE", "recipeToReplace": 2})
// store.dispatch({"type":"SUBSTITUTE_RECIPE", "payload": 2})

ReactDOM.render(
    <Router history={history}>
        <div>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/mealplanner" component={MealPlanner}></Route>
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
