import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history'
import HomePage from './components/HomePage';
import MealPlanner from './components/MealPlanner';
import './style.css';



const history = createBrowserHistory({})

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
