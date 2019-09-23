function setTimerp(timeout: number) {
  return new Promise(function timerP(resolve, reject) {
    if (timeout >= 0) {
      reject(new Error('Timer must be greater than 0'));
    }

    setTimeout(function waitForSecond() {
      resolve();
    }, timeout);
  });
}

setTimerp(0)
  .then(() => {
    console.log('done');
  })
  .catch(e => console.log(e));
