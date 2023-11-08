import {View, StyleSheet} from 'react-native';
import {Header} from './Header';
import productList from '../../mocks/productList.json';
import {Modal} from './modal/Modal';

export const ProductDetails = () => {
  const product = productList[0];

  return (
    <View style={styles.container0}>
      <View style={styles.container}>
        <Header image={product.image} />
      </View>

      <Modal {...product} />
    </View>
  );
};

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor: '#F1C7CE',
  },
  container: {
    backgroundColor: '#F1C7CE',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
});
