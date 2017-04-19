const mylib = require('../src/index02');

test('02. Hello user.', () => {
  expect(mylib()).toEqual('Hello World');
  expect(mylib('ant')).toEqual('Hello ant');
});