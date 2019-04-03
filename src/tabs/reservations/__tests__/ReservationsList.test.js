/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import jest from 'jest-mock';

import ReservationsList from '../ReservationsList';
import ReservationsListItem from '../ReservationsListItem';
import ButtonAction from '../../../common/ButtonActionRound';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<ReservationsList />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      hotels: [[{
        hotelName: 'test',
        __typename: 'Reservation',
        id: '123456',
        name: 'Andy',
        arrivalDate: '04/22/2020',
        departureDate: '04/22/9999',
      }]],
      setShowScheduler: jest.fn(),
    };

    wrapper = shallow(<ReservationsList {...props} />);
  });

  it('should be defined', () => {
    expect(ReservationsList).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ReservationsList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders ReservationsListItem', () => {
    expect(wrapper.find(ReservationsListItem)).toBeDefined();
  })

  it('renders a ButtonAction to allow opening ReservationsScheduler', () => {
    expect(wrapper.find(ButtonAction)).toBeDefined();
  });
});
