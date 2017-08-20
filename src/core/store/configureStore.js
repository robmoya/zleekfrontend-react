import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
// import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const logger = (store) => (next) => (action) => {
    console.log("Store Changed", action);
    next(action);
}
const error = (store) => (next) => (action) => {
    try{
        next(action)
    }catch(e){
        console.log("error",e);
    }
}

const middleware = applyMiddleware(logger,error);

const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        middleware
        // compose(
            // applyMiddleware(logger, error)
            // applyMiddleware(thunk, reduxImmutableStateInvariant(), logger),
        //     window.devToolsExtension ? window.devToolsExtension() : f => f
        // )
    );
};

export default configureStore;
