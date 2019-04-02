import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import theme from '../theme';

type props = {
  activityStyles: object,
  containerStyles: object,
  textStyles: object,
  textLabel: string,
};

export default LoadingIndicator = ({
  activityStyles,
  containerStyles,
  textStyles,
  textLabel,
}) => (
  <View style={[styles.container, containerStyles]}>
    <ActivityIndicator
      animating
      color={theme.COLOR_PRIMARY}
      size={'large'}
      style={activityStyles}
    />
    <Text style={[styles.text, textStyles]}>
      { textLabel }
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  text: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginTop: 25,
  },
});