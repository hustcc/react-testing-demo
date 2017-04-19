const mylib = require('../src/index03');

test('03. Hello user.', () => {
  expect(mylib()).toEqual({hello: 'hello', userName: 'world'});
  expect(mylib('ant')).toEqual({hello: 'hello', userName: 'ant'});
});