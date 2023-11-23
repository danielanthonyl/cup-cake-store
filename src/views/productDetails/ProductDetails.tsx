import {View, StyleSheet} from 'react-native';
import {Header} from './Header';
import {Modal} from './modal/Modal';
import {useRoute} from '@react-navigation/native';
import {selectProductById} from '../../store/product/action/selectProductById';
import {store} from '../../store/store';
import Text from '../../components/texts/Text';

interface ProductDetaisParams {
  id: string;
}

export const ProductDetails = () => {
  const route = useRoute();
  const {id} = route.params as ProductDetaisParams;

  const {productsReducer} = store.getState();
  const product = selectProductById({state: productsReducer, id});

  if (!product) {
    return (
      <View>
        <Text>ops! something go wrong</Text>
      </View>
    );
  }

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
