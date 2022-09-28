import React from 'react';
import Reducer from './Reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider as ProviderRedux } from 'react-redux';
import reduxThunk from 'redux-thunk';

export const store = createStore(
    combineReducers(Reducer),
    {},
    applyMiddleware(reduxThunk),
);

const Redux = (props) => {
    return (<ProviderRedux store={store} >
        {props.children}
    </ProviderRedux>)
}
export default Redux;