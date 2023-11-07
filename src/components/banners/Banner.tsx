import {ReactNode} from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';

export type BannerProps = {
  children: ReactNode;
  style: StyleProp<ViewStyle>;
};

export const Banner = ({children, style}: Partial<BannerProps>) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1C7CE',
    borderRadius: 16,
    padding: 10,
  },
});
