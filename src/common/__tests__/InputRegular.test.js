/**
 * @format
 */

import 'react-native';
import React from 'react';
import InputRegular from '../InputRegular';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<InputRegular />', () => {
  it('should be defined', () => {
    expect(InputRegular).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<InputRegular />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
