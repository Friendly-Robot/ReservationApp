import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import theme from '../theme';

type buttonProps = {
  icon: string,
  onPress: Function,
};

export default ButtonActionRound = ({ onPress = () => {}, icon = '+' }: buttonProps) => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.button}  
    >
      <Text style={styles.icon}>{ icon }</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.COLOR_PRIMARY,
    borderRadius: theme.BORDER_RADIUS_ROUND,
    ...theme.elevation,
    height: 50,
    justifyContent: 'center',
    width: 50,

  },
  container: {
    backgroundColor: 'transparent',
    bottom: 25,
    position: 'absolute',
    right: 15,
    zIndex: 10,
  },
  icon: {
    color: theme.COLOR_WHITE,
    fontSize: 35,
  },
});