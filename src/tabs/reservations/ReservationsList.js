/*
* @flow
*/

import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import LoadingIndicator from '../../common/LoadingIndicator';
import HeaderImage from '../../common/HeaderImage';
import HeaderTitle from '../../common/HeaderTitle';
import ReservationsListItem from './ReservationsListItem';
import ButtonAction from '../../common/ButtonActionRound';

import sortReservations from './sortReservations';

import theme from '../../theme';

const listDataValues = {
  loading: boolean,
  reservations: Array<T>,
};

type listProps = {
  data: $Keys<typeof listDataValues/>,
};

ReservationsList = ({ data }: listProps) => {
  const { loading } = data;

  if (loading) {
    return (
      <View style={styles.flex}>
        { renderHeader('Reservations') }
        <LoadingIndicator textLabel={'Loading reservations'} />
      </View>
    );
  }

  const [reservations, setReservations ] = useState([]);

  useEffect(() => {
    sortReservations(data.reservations, setReservations);
  }, [data.reservations])

  // TODO: Handle default view when loading has finished but reservations are empty.

  return renderHotelReservations(reservations);
}

renderHotelReservations = (hotels) => (
  <View style={styles.container}>
    { renderHeader('Reservations') }
    <ButtonAction onPress={() => {}} />
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {hotels.map(reservations => {
        if (reservations.length === 0) return null;
        return (
          <ReservationsListItem
            key={reservations[0].hotelName}
            reservations={reservations}
          />
        );
      })}
    </ScrollView>
  </View>
);

renderHeader = (title = 'Reservations') => (
  <View style={styles.absolute}>
    <HeaderTitle title={title} />
    <HeaderImage />
  </View>
)

const styles = StyleSheet.create({
  absolute: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    backgroundColor: theme.COLOR_WHITE,
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 215, // offset marginTop
    marginTop: 215,
  }
});

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (ReservationsList here)
export default graphql(gql`
  query {
    reservations {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`)(ReservationsList);