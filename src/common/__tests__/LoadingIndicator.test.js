/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoadingIndicator from '../LoadingIndicator';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<LoadingIndicator />).toJSON();
  expect(tree).toMatchSnapshot();
});
