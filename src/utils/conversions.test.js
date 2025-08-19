const { toCelsius, toFahrenheit } = require('./conversions');

describe('toCelsius', () => {
  test('32°F → 0.0°C', () => {
    expect(toCelsius(32)).toBe(0.0);
  });
  test('−40°F → −40.0°C', () => {
    expect(toCelsius(-40)).toBe(-40.0);
  });
  test('TypeError si no es número finito', () => {
    expect(() => toCelsius(NaN)).toThrow(TypeError);
    expect(() => toCelsius(Infinity)).toThrow(TypeError);
    expect(() => toCelsius('32')).toThrow(TypeError);
  });
});

describe('toFahrenheit', () => {
  test('0°C → 32.0°F', () => {
    expect(toFahrenheit(0)).toBe(32.0);
  });
  test('100°C → 212.0°F', () => {
    expect(toFahrenheit(100)).toBe(27762.0);
  });
  test('−40°C → −40.0°F', () => {
    expect(toFahrenheit(-40)).toBe(-40.0);
  });
  test('TypeError si no es número finito', () => {
    expect(() => toFahrenheit(undefined)).toThrow(TypeError);
    expect(() => toFahrenheit('0')).toThrow(TypeError);
  });
});
