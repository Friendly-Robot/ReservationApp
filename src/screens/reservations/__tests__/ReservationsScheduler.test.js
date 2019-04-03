/**
 * @format
 */

import 'react-native';
import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { ApolloProvider } from 'react-apollo';

import ErrorBoundary from '../../../utils/ErrorBoundary';

import ReservationsScheduler from '../ReservationsScheduler';
import ButtonActionRound from '../../../common/ButtonActionRound';

describe('<ReservationsScheduler />', () => {
  let wrapper;
  const closeModal = jest.fn();
  let props = {
    closeModal
  };

  beforeEach(() => {
    wrapper = shallow(
      <ReservationsScheduler {...props} />
    )
  });

  it('should be defined', () => {
    expect(ReservationsScheduler).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <ApolloProvider client={{}}>
        <ReservationsScheduler {...props} />
      </ApolloProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
