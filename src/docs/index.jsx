import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import createStore from '../redux/store';

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);