export function setTimerP(timeout, arg) {
  if (timeout <= 0) {
    return Promise.reject(new Error('timeout must be > 0'));
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(arg);
    }, timeout);
  });
}

export function countDown(arg, timeout, count, cb) {
  if (count > -1) {
    setTimeout(() => {
      cb(arg, count, count === 0);
      countDown(arg, timeout, count - 1, cb);
    }, timeout);
  }
}
