import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore } from 'redux'
import { eventsReducer } from './reducer/eventsReducer'

import { Provider } from 'react-redux'

const store = createStore(eventsReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
