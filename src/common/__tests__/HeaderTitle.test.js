/**
 * @format
 */

import 'react-native';
import React from 'react';
import HeaderTitle from '../HeaderTitle';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<HeaderTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
