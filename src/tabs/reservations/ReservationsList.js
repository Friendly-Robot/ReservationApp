/*
* @flow
*/

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ReservationsHeader from './ReservationsHeader';
import ReservationsListItem from './ReservationsListItem';
import ButtonAction from '../../common/ButtonActionRound';

import theme from '../../theme';

type listProps = {
  hotels: Array<T>,
  setShowScheduler: Function,
};

export default ReservationsList = ({hotels = [], setShowScheduler = () => {}}: listProps) => (
  <View style={styles.container}>
    <ReservationsHeader title={'Reservations'} />
    <ButtonAction onPress={() => setShowScheduler(true)} />
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {hotels.map(reservations => {
        if (reservations.length === 0) return null;
        if (!reservations[0].hotelName) return null;
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLOR_WHITE,
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 215, // offset marginTop
    marginTop: 215,
  }
});
