/**
 * @format
 */

import 'react-native';
import React from 'react';
import HeaderTitle from '../HeaderTitle';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<HeaderTitle />', () => {
  it('should be defined', () => {
    expect(HeaderTitle).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<HeaderTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
