// index07.js test it with jest, for document mock.
import React from 'react';
import Index07 from '../src/index07';
import Link from '../src/index06';

test('07. For document mock, and test callback.', () => {
  const component = (<Link page="http://alibaba-inc.com">Alibaba</Link>);
  // mock function for callback
  const callback = jest.fn();

  let ele = document.body; // DOMElement

  // execute the module
  expect(Index07(component, ele, callback)).toEqual('html dom');
  expect(callback).toHaveBeenCalled();

  ele = '#root';
  expect(Index07(component, ele, callback)).toEqual('string selector');
  expect(callback).toHaveBeenCalled();
});