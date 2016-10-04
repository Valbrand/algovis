import ProxyUnavailableError from './ProxyUnavailableError';

export default function Context(object) {
  if (!window.Proxy) {
    throw new ProxyUnavailableError();
  }

  return new Proxy(object || {}, {
    set (target, property, value, receiver) {
      if (target[property] === undefined) {
        // create var
      } else {
        // update var
      }

      target[property] = value;

      return true;
    }
  });
}