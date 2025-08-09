// math.js
function assertInteger(n, name = 'n') {
  if (typeof n !== 'number' || !Number.isFinite(n) || !Number.isInteger(n)) {
    throw new TypeError(`${name} must be a finite integer`);
  }
}

function factorial(n) {
  assertInteger(n, 'n');
  if (n < 0) throw new RangeError('n must be >= 0');
  if (n === 0) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function fibonacci(n) {
  assertInteger(n, 'n');
  if (n < 0) throw new RangeError('n must be >= 0');
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) { const t = a + b; a = b; b = t; }
  return b;
}

module.exports = { factorial, fibonacci };
