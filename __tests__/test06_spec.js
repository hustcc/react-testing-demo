// index06.js test it with jest, with snapshots.
import React from 'react';
import Link from '../src/index06';
import renderer from 'react-test-renderer';

test('06. Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://alibaba-inc.com">Alibab</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});