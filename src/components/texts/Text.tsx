import React from 'react';
import {Text as RNText, StyleSheet, TextProps} from 'react-native';

const Text = (props: TextProps) => {
  return (
    <RNText {...props} style={[styles.text, props.style]}>
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});

export default Text;
