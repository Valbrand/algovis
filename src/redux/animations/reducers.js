import types from './actionTypes';

export default {
  isAnimating (state = false, action) {
    switch (action.type) {
      case types.resumeAnimations:
        return true;
      case types.pauseAnimations:
        return false;
      default:
        return state;
    }
  }
}