console.log('Start');

function getType(x) {
  if (x === null) { return 'null'; }
  if (Array.isArray(x)) { return 'array'; }
  if (Number.isNaN(x)) { return 'NaN'; }
  return typeof (x);
}

function counter() {
  let count = 0;
  return {
    getCount: () => count,
    increase: () => { count += 1; },
    decrease: () => { count -= 1; },
  };
}

const curringSum = a => b => c => a + b + c;

const testCounter = counter();

module.exports = { getType, testCounter, curringSum };
