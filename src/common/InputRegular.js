import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

import theme from '../theme';

type props = {
  label: string,
  onChange: Function,
  placeholder: string,
  value: string,
};

export default InputRegular = ({ label = '', onChange = () => {}, placeholder = '', value = ''}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, focused && styles.focused]}>
      <Text style={styles.label}>{ label }</Text>
      <TextInput
        autoCapitalize={'words'}
        onBlur={() => setFocused(false)}
        onChangeText={(text) => onChange(text)}
        onFocus={() => setFocused(true)}
        placeholder={placeholder}
        placeholderTextColor={theme.COLOR_GREY}
        style={styles.input}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderBottomWidth: theme.BORDER_WIDTH_SMALL,
    borderColor: theme.COLOR_DARK,
    marginHorizontal: theme.BORDER_MARGIN_HORIZONTAL,
    marginVertical: theme.BORDER_MARGIN_VERTICAL,
  },
  focused: {
    borderBottomWidth: theme.BORDER_WIDTH_LARGE,
    borderColor: theme.COLOR_PRIMARY,
  },
  input: {
    color: theme.COLOR_DARK,
    fontSize: theme.FONT_SIZE_MEDIUM,
    paddingHorizontal: theme.BORDER_PADDING_HORIZONTAL,
    paddingVertical: theme.BORDER_PADDING_VERTICAL,
  },
  label: {
    color: theme.COLOR_DARK,
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
});