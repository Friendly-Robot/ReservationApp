/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import ReservationsListItem from '../ReservationsListItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<ReservationsListItem />', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      reservations: [{__typename: 'Reservations', hotelName: 'test'}],
    };

    wrapper = shallow(<ReservationsListItem {...props} />);
  })

  it('should be defined', () => {
    expect(ReservationsListItem).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ReservationsListItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
