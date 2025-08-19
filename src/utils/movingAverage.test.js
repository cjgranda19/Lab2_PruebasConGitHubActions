const { movingAverage } = require('../src/utils/movingAverage');

describe('movingAverage', () => {
test('([10,20,30,40], 2) → [15.00, 25.00, 35.00]', () => {
    expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
});

test('([1,2,3], 3) → [2.00]', () => {
    expect(movingAverage([1,2,3], 3)).toEqual([2.00]);
});

test('valida que los elementos o números sean números finitos', () => {
    expect(() => movingAverage([1, '2', 3], 2)).toThrow(TypeError);
    expect(() => movingAverage([1, NaN], 2)).toThrow(TypeError);
});

test('la ventana fuera de rango → RangeError', () => {
    expect(() => movingAverage([1,2,3], 1)).toThrow(RangeError);
    expect(() => movingAverage([1,2,3], 4)).toThrow(RangeError);
});

test('la ventana debe ser un entero', () => {
    expect(() => movingAverage([1,2,3], 2.5)).toThrow(TypeError);
});
});
