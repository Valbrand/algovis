import actionTypes from './actionTypes';

const actionCreators = {
  init (...elements) {
    return {
      type: actionTypes.init,
      payload: {
        elements,
      }
    };
  },

  push (element) {
    return {
      type: actionTypes.push,
      payload: {
        element,
      }
    };
  }
};

export default actionCreators;
