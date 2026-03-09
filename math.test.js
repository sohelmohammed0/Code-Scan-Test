const multiply = require('./math');

test('multiplies numbers correctly', () => {
  expect(multiply(2, 3)).toBe(6);
});
