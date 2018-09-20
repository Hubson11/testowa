import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore, applyMiddleware } from 'redux'
import { eventsReducer } from './reducer/eventsReducer'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const store = createStore(eventsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
