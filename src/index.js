import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './core/store/configureStore';
import { createBrowserHistory } from 'history'
import HomePage from './components/HomePage';
import MealPlanner from './components/MealPlanner';
import 'font-awesome/css/font-awesome.css';
import './base.css';
// import 'bootstrap-sass/assets/javascripts/bootstrap.min.js';


const history = createBrowserHistory({});
const store = configureStore();

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
