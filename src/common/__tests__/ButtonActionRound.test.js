/**
 * @format
 */

import 'react-native';
import React from 'react';
import ButtonActionRound from '../ButtonActionRound';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ButtonActionRound />).toJSON();
  expect(tree).toMatchSnapshot();
});
