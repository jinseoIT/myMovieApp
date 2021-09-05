import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

