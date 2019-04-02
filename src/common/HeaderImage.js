import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { HotelFrontDesk } from './img';
import theme from '../theme';

export default HeaderImage = () => (
  <ImageBackground source={HotelFrontDesk} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: theme.deviceWidth,
    zIndex: 2,
  },
});