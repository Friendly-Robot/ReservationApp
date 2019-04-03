/*
* @flow
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme from '../../theme';

type ItemProps = {
  reservations: Array<Object>,
};

export default ({ reservations = [] }: ItemProps) => {
  if (reservations[0].__typename !== 'Reservation') return null;
  const hotelName = reservations[0].hotelName;
  return (
    <View style={styles.container}>
      <Text style={styles.hotelName}>{ hotelName }</Text>

      {reservations.map(res => (
        <View key={res.id} style={styles.itemContainer}>
          <Text style={styles.itemLabel}>Guest: <Text style={styles.itemName}>{res.name}</Text></Text>
          <View style={styles.itemDatesContainer}>
            <Text style={styles.itemDates}>
              {res.arrivalDate}
              <Text style={styles.hotelName}>{` -> `}</Text>
              {res.departureDate}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLOR_WHITE,
    borderColor: theme.COLOR_DARK,
    borderRadius: theme.BORDER_RADIUS_SMALL,
    borderWidth: theme.BORDER_WIDTH_MEDIUM,
    marginHorizontal: theme.BORDER_MARGIN_HORIZONTAL,
    marginVertical: theme.BORDER_MARGIN_VERTICAL,
    paddingHorizontal: theme.BORDER_PADDING_HORIZONTAL,
    paddingVertical: theme.BORDER_PADDING_VERTICAL,
  },
  hotelName: {
    color: theme.COLOR_DARK,
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    marginBottom: theme.BORDER_MARGIN_VERTICAL,
  },
  itemContainer: {
    paddingVertical: theme.BORDER_PADDING_VERTICAL,
  },
  itemDates: {
    color: theme.COLOR_DARK,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  itemDatesContainer: {
    flexDirection: 'row',
  },
  itemLabel: {
    color: theme.COLOR_DARK,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  itemName: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
});
