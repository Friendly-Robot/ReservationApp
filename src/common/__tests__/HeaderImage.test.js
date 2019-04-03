/**
 * @format
 */

import 'react-native';
import React from 'react';
import HeaderImage from '../HeaderImage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<HeaderImage />', () => {
  it('should be defined', () => {
    expect(HeaderImage).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<HeaderImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
