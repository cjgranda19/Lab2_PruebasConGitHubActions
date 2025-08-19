function assertFiniteNumber(value, name) {
if (!Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
}
}

function roundTo(value, digits) {
  const p = 10 ** digits;
  return Math.round((value + Number.EPSILON) * p) / p;
}

function toCelsius(f) {
assertFiniteNumber(f, 'f');
  const c = (f - 32) * (5 / 9);
return roundTo(c, 1);
}

function toFahrenheit(c) {
assertFiniteNumber(c, 'c');
const f = (c * (9 / 5)) + 32;
return roundTo(f, 1);
}

module.exports = { toCelsius, toFahrenheit, roundTo, assertFiniteNumber };
