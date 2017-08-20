import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(logger,thunk)
            // applyMiddleware(thunk, reduxImmutableStateInvariant(), logger),
            // window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
};

export default configureStore;
