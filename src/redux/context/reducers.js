import { Map, List as ImmutableList } from 'immutable';

import actionTypes from './actionTypes';

export const actionsListName = '__actions';

export default function contextReducer (state, action) {
  if (state === undefined) {
    return Map({
      [actionsListName]: ImmutableList()
    });
  }

  switch (action.type) {
    case actionTypes.newVariable: {
      const { name, value } = action.payload;

      if (name !== actionsListName) {
        return state.withMutations((state) => {
          state.set(actionsListName, state.get(actionsListName).push(action));
          return state.set(name, value);
        });
      }

      break;
    }
    case actionTypes.updateVariable: {
      const { name, value } = action.payload;

      if (name !== actionsListName) {
        return state.withMutations((state) => {
          state.set(actionsListName, state.get(actionsListName).push(action));
          return state.set(name, value);
        });
      }

      break;
    }
  }
}