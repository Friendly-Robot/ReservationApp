/**
 * @format
 */

import 'react-native';
import React from 'react';
import jest from 'jest-mock';
import { ApolloProvider } from 'react-apollo';

import Reservations from '../Reservations';
import ErrorBoundary from '../../../utils/ErrorBoundary';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Reservations />', () => {
  let client;
  let props;

  beforeEach(() => {
    client = {
      watchQuery: jest.fn(),
    };
    
    props = {
      data: {
        loading: false,
        reservations: [{
          hotelName: 'test',
          __typename: 'Reservation',
          id: '123456',
          name: 'Andy',
          arrivalDate: '04/22/2020',
          departureDate: '04/22/9999',
        }],
      }
    };
  });

  it('should be defined', () => {
    expect(Reservations).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <Reservations {...props} />
        </ApolloProvider>
      </ErrorBoundary>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
