/*
* @flow
*/

import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ApolloProvider, graphql } from 'react-apollo';
import reservationQuery from '../../graphql/queries';

import LoadingIndicator from '../../common/LoadingIndicator';
import ReservationsHeader from './ReservationsHeader';
import ReservationsList from './ReservationsList';
import ReservationsScheduler from './ReservationsScheduler';

import sortReservations from './sortReservations';

import theme from '../../theme';

const dataValues = {
  loading: Boolean,
  reservations: Array,
};

type props = {
  data: dataValues,
};

const Reservations = ({ data }: props) => {
  const { loading } = data;

  const [reservations, setReservations] = useState(null);
  const [showScheduler, setShowScheduler] = useState(false);

  useEffect(() => {
    sortReservations(data.reservations, setReservations);
  }, [data.reservations]);

  if (loading || reservations === null) {
    return (
      <View style={styles.flex}>
        <ReservationsHeader title={'Reservations'} />
        <LoadingIndicator textLabel={'Loading reservations'} />
      </View>
    );
  }

  if (showScheduler) return <ReservationsScheduler closeModal={() => setShowScheduler(false)} />;
  
  // TODO: Handle default view when loading has finished but reservations are empty.
  return (
    <ReservationsList
      hotels={reservations}
      setShowScheduler={setShowScheduler}
    />
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (ReservationsList here)
export default graphql(reservationQuery)(Reservations);