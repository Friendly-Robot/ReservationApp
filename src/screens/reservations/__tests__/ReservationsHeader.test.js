/**
 * @format
 */

import 'react-native';
import React from 'react';
import ReservationsHeader from '../ReservationsHeader';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<ReservationsHeader />', () => {
  it('should be defined', () => {
    expect(ReservationsHeader).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ReservationsHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
