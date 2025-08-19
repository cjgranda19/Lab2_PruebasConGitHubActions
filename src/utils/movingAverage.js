const { assertFiniteNumber, roundTo } = require('./conversions');

function movingAverage(series, window) {
if (!Array.isArray(series)) {
    throw new TypeError('La serie debe ser una matriz');
}
if (!Number.isInteger(window)) {
    throw new TypeError('La ventana debe ser un entero');
}
if (window < 2 || window > series.length) {
    throw new RangeError('La ventana debe estar entre 2 y series.length');
}

for (let i = 0; i < series.length; i++) {
    assertFiniteNumber(series[i], `series[${i}]`);
}

const out = [];
let sum = 0;

for (let i = 0; i < window; i++) sum += series[i];
out.push(roundTo(sum / window, 2));

for (let i = window; i < series.length; i++) {
    sum += series[i] - series[i - window];
    out.push(roundTo(sum / window, 2));
}

return out;
}

module.exports = { movingAverage };
