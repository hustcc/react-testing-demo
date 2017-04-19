// index05.js test it with jest + enzyme
import React from 'react';
import MyComponent from '../src/index05';
import {shallow} from 'enzyme';

test('05. button', () => {
  let title = 'Hello world.';
  let component = shallow(
    <MyComponent title={title} />
  );
  expect(component.find('button').text()).toEqual(title);
  expect(component.find('button').props().title).toEqual(title);

  // click
  component.find('button').simulate('click');
  expect(component.find('button').text()).toEqual('Clicked');
});