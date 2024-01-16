var assert = require('assert');
const { fn2 } = require('../app');
const arrayNum = require('../app').arrayNum
const fn = require('../app').fn
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(arrayNum.indexOf(4), -1);
    });
  });
  (async function () {
    const z = await fn(4);
    // const y = fn2();
  
    describe('my suite', function () {
      it(`expected value ${z}`, function () {
        assert.strictEqual(z, 6);
      });
    });
  
    run();
  })();
});