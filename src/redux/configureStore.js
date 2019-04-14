/***
 * store create
 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { routerReducer } from 'react-router-redux';

import ThunkMiddleware from 'redux-thunk';
import createFetchMiddleware from 'redux-composable-fetch';
import rootReducer from './reducer';
import DevTools from './DevTools';

const FetchMiddleware = createFetchMiddleware({
    afterFetch({ action, result }) {
        return result.json().then(data => {
            return Promise.resolve({
                action,
                result: data,
            });
        });
    },
    // credentials: "same-origin",
});

const finalCreateStore = compose(
    applyMiddleware(
        ThunkMiddleware,
        FetchMiddleware
    )
)(createStore);


const reducer = combineReducers(Object.assign({}, rootReducer, {
    routing: routerReducer,
}))

export default function configureStore(initialState) {
    const store = finalCreateStore(reducer, initialState);

    return store;
}