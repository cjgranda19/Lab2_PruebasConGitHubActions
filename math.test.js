// math.test.js
const { factorial, fibonacci } = require('./math');

describe('math utilities', () => {
  describe('factorial', () => {
    test('0! === 1', () => expect(factorial(0)).toBe(1));
    test('5! === 120', () => expect(factorial(5)).toBe(120));
    test('lanza en negativos', () => expect(() => factorial(-1)).toThrow(RangeError));
    test('lanza en no enteros', () => expect(() => factorial(2.5)).toThrow(TypeError));
  });

  describe('fibonacci', () => {
    test('F(0) === 0', () => expect(fibonacci(0)).toBe(0));
    test('F(1) === 1', () => expect(fibonacci(123)).toBe(129199292));
    test('F(10) === 55', () => expect(fibonacci(10)).toBe(52345));
    test('lanza en negativos', () => expect(() => fibonacci(-3)).toThrow(RangeError));
    test('lanza en no enteros', () => expect(() => fibonacci(3.2)).toThrow(TypeError));
  });
});
