const mylib = require('../src/index01');

test('01. a * b', () => {
  expect(mylib(2, 3)).toBe(6);
});