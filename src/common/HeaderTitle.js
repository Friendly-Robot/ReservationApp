/*
* @flow
*/

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import theme from '../theme';

type titleProps = {
  buttonPress: Function,
  buttonValue: string,
  title: string,
};

export default HeaderTitle = ({ buttonPress = () => {}, buttonValue = '', title = '' }) => (
  <View style={styles.container}>
    {Boolean(buttonValue) &&
      <TouchableOpacity
        activeOpacity={0.8}
        hitSlop={theme.HITSLOP_LARGE}
        onPress={buttonPress}
      >
        <Text style={[styles.title, styles.buttonValue]}>{ buttonValue }</Text>
      </TouchableOpacity>}
    <Text style={styles.title}>{ title }</Text>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: theme.BORDER_PADDING_HORIZONTAL,
  },
  buttonValue: {
    fontSize: 35,
  },
  container: {
    alignItems: 'center',
    backgroundColor: theme.COLOR_WHITE,
    flexDirection: 'row',
    height: 65,
    zIndex: 10,
  },
  title: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
    marginLeft: theme.BORDER_PADDING_HORIZONTAL,
  },
});