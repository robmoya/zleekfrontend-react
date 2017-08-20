import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './core/store/configureStore';
import { createBrowserHistory } from 'history'
import HomePage from './components/HomePage';
import MealPlanner from './components/MealPlanner';
import './style.css';


// import ZleekApi from './api/zleekApi.js';
// import EditMealForm from './EditMealForm';
// import sampleApiCall from './api/sampleApiCall';


const history = createBrowserHistory({});
const store = configureStore();

// store.dispatch((dispatch)=> {
    // dispatch({"type":"CREATE_MEAL_PLAN", "mealsPerDay": 2, "recipesPerMeal": 3});
    // dispatch({"type":"SUBSTITUTE_RECIPE", "recipeToReplace": 2});
    // dispatch({"type":"FETCH_MEAL_PLAN", payload: {"mealsPerDay": 2, "recipesPerMeal": 3}});

    // ZleekApi.getMealPlan(sampleApiCall).then((data) => {
    //     dispatch({"type":"RECEIVE_MEAL_PLAN", "payload": data});
    // }).catch((error) => {
    //     console.log("Api call error");
            // dispatch({"type":"FETCH_MEAL_PLAN_ERROR", "payload":error})
    // })
// })

// store.subscribe(()=>{
//     console.log('store changed', store.getState());
// })

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/mealplanner" component={MealPlanner}></Route>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
