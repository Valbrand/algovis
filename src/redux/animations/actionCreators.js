import types from './actionTypes';

export default {
  resumeAnimations () {
    return {
      type: types.resumeAnimations,
    };
  },

  pauseAnimations () {
    return {
      type: types.pauseAnimations,
    };
  }
}