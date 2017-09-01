import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './core/store/configureStore';
import { createBrowserHistory } from 'history';
import App from './components/App';
import MvpPage from './components/MvpPage';
import MealPlanner from './components/MealPlanner';
import RecipePage from './components/RecipePage';
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
            <App>
                <Route exact path="/" component={MvpPage} />
                <Route path="/recipes/:id/default" component={RecipePage} />
                <Route path="/mealplanner" component={MealPlanner} />
            </App>
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
