import types from './actionTypes';

export default {
  newVariable (name, value) {
    return {
      type: types.newVariable,
      context: true,
      payload: {
        name,
        value,
      }
    };
  },

  updateVariable (name, oldValue, newValue) {
    return {
      type: types.updateVariable,
      context: true,
      payload: {
        name,
        oldValue,
        newValue
      }
    }
  }
}