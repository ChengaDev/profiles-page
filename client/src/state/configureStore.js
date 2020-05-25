import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import initialState from './initialState';
import thunk from 'redux-thunk';
import 'regenerator-runtime/runtime';

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(middleware)
    );

    return store;
}
