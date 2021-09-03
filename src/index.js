import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Reducer from './_reducers';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
)}  
  >
    <App />
  </Provider>,
  document.getElementById('root')
);

