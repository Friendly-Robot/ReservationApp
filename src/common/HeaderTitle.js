/*
* @flow
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme from '../theme';

type titleProps = {
  title: string,
};

export default HeaderTitle = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ title }</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLOR_WHITE,
    height: 65,
    justifyContent: 'center',
    zIndex: 10,
  },
  title: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
    marginLeft: theme.BORDER_PADDING_HORIZONTAL,
  },
});