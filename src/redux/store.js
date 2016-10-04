import { combineReducers, createStore, applyMiddleware } from 'redux';

import context from './context/reducers';
import contextMiddleware from './context/middleware';

const reducers = combineReducers({
  context,
});

export default function () {
  return createStore(
    reducers,
    applyMiddleware(
      contextMiddleware()
    )
  );
};
