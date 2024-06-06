// __tests__/weekFn.test.js
const weekFn = require('../weekFn');

test('returns correct day for each valid number', () => {
  expect(weekFn(1)).toBe('Понеділок');
  expect(weekFn(2)).toBe('Вівторок');
  expect(weekFn(3)).toBe('Середа');
  expect(weekFn(4)).toBe('Четвер');
  expect(weekFn(5)).toBe('П\'ятниця');
  expect(weekFn(6)).toBe('Субота');
  expect(weekFn(7)).toBe('Неділя');
});

test('returns null for invalid numbers', () => {
  expect(weekFn(0)).toBe(null);
  expect(weekFn(8)).toBe(null);
  expect(weekFn(9)).toBe(null);
});

test('returns null for non-integer numbers', () => {
  expect(weekFn(1.5)).toBe(null);
  expect(weekFn(3.14)).toBe(null);
});

test('returns null for non-numeric input', () => {
  expect(weekFn('2')).toBe(null);
  expect(weekFn('Monday')).toBe(null);
  expect(weekFn(null)).toBe(null);
  expect(weekFn(undefined)).toBe(null);
});
