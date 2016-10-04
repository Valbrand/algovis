export default () => {
  const updatesQueue = [];
  const delay = 1000;
  let queueNeedsToBeConsumed = true;

  return (state) => (next) => (action) => {
    function consumeQueue() {
      if (updatesQueue.length > 0) {
        queueNeedsToBeConsumed = false;
        console.log(updatesQueue[0]);
        next(updatesQueue.shift());
        setTimeout(consumeQueue, delay);
      } else {
        queueNeedsToBeConsumed = true;
      }
    }

    if (!action.context) {
      return next(action);
    }

    updatesQueue.push(action);

    if (queueNeedsToBeConsumed) {
      consumeQueue();
    }
  }
};