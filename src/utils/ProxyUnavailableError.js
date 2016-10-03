export default class ProxyUnavailableError extends Error {
  constructor () {
    super("Proxies aren't available in your browser. Please use a modern browser!");
  }
}