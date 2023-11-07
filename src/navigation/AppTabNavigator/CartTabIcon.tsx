import {Handbag} from 'phosphor-react-native';
import {View, StyleSheet} from 'react-native';
import {useCartStatus} from '../../hooks/useCartStatus';

export const CartTabIcon = () => {
  const hasCartData = useCartStatus();

  return (
    <View>
      <Handbag color="white" />
      {hasCartData ? <View style={styles.redDot} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  redDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 100,
    width: 9,
    height: 9,
    backgroundColor: 'red',
  },
});
