import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Text from '../texts/Text';
import productList from '../../mocks/productList.json';
import {Product} from './Product';

export type ProductListProps = {
  title: string;
};

export const ProductList = ({title}: Partial<ProductListProps>) => {
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
        {productList.map(({id, ...rest}) => (
          <Product key={id} {...rest} />
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
