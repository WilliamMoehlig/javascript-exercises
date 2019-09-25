import { setTimerP, countDown } from './time';

describe('time.js', () => {
  describe('timerP', () => {
    it('should throw error because timer is set on 0', async () => {
      expect.assertions(1);
      return setTimerP(0, 'countDown').catch(err => {
        expect(err.message).toMatch('timeout');
      });
    });

    it('should return argument', async () => {
      expect.assertions(1);
      return setTimerP(100, 'countDown').then(res => {
        expect(res).toBe('countDown');
      });
    });
  });

  describe('countDown', () => {
    it('should last value be 0 ', done => {
      countDown('count: ', 60, 5, (arg, count, end) => {
        if (end) {
          expect(count).toBe(0);
          done();
        }
      });
    });

    it('should have the correct argument', done => {
      countDown('count:', 60, 5, (arg, count, end) => {
        expect(arg).toBe('count:');
        if (end) {
          done();
        }
      });
    });

    it('should be called 6 times within range(5, 0) ', done => {
      expect.assertions(6);
      let loopcount = 6;
      countDown('count: ', 60, 5, (arg, count, end) => {
        expect(count).toBe(--loopcount);
        if (end) {
          done();
        }
      });
    });

    it('should first value be 5', done => {
      expect.assertions(6);
      countDown('count: ', 60, 5, (arg, count, end) => {
        expect(count).toBeWithin(-1, 6);
        if (end) {
          done();
        }
      });
    });
  });
});
