const isEven = require('./isEven');

test('returns "is even" for even numbers', () => {
  expect(isEven(4)).toBe('is even');
});

test('returns "is odd" for odd numbers', () => {
  expect(isEven(5)).toBe('is odd');
});
