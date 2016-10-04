import ProxyUnavailableError from './ProxyUnavailableError';
import actions from '../redux/context/actionCreators';

export default function Context(object, dispatch) {
  if (!window.Proxy) {
    throw new ProxyUnavailableError();
  }

  return new Proxy(object || {}, {
    set (target, property, value, receiver) {
      if (target[property] === undefined) {
        dispatch(
          actions.newVariable(property, value)
        );
      } else {
        dispatch(
          actions.updateVariable(property, target[property], value)
        );
      }

      target[property] = value;

      return true;
    }
  });
}