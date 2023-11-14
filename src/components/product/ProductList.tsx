import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Text from '../texts/Text';
import {Product} from './Product';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {useEffect} from 'react';
import {fetchProductList} from '../../store/product/reducer/productReducer';

export type ProductListProps = {
  title: string;
};

export const ProductList = ({title}: Partial<ProductListProps>) => {
  const productList = useSelector((store: RootState) => {
    return store.productsReducer.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList() as any);
  }, [dispatch]);

  const isProductListEmpty = productList.length <= 0;

  if (isProductListEmpty) {
    return null;
  }

  return (
    <View style={styles.container}>
      {title ? (
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Ver mais</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productListContainer}>
        {productList.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  productListContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  container: {
    gap: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
  },
});
