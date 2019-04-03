/*
* @flow
*/

import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeaderImage from '../../common/HeaderImage';
import HeaderTitle from '../../common/HeaderTitle';

type props = {
  title: string,
};

export default ({title = 'Reservations'}: props) => (
  <View style={styles.absolute}>
    <HeaderTitle title={title} />
    <HeaderImage />
  </View>
);

const styles = StyleSheet.create({
  absolute: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
