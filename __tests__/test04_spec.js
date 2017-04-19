const mylib = require('../src/index04');

test('04.1. Promises paramter empty', () => {
  return mylib().then(data => {
    expect(data).toEqual('Hello World');
  });
});

test('04.2. Promises paramter not empty', () => {
  return mylib('ant').then(data => {
    expect(data).toEqual('Hello ant');
  });
});