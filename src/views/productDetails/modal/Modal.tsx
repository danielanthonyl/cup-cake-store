import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Text from '../../../components/texts/Text';
import {toBRLCurrency} from '../../../helpers/toBRLCurrency';
import {ReviewsCard} from '../ReviewsCard';
import {ProductList} from '../../../components/product/ProductList';
import {Counter} from './Counter';

export type ModalProps = {
  title: string;
  price: number;
  description: string;
};

export const Modal = ({title, price, description}: Partial<ModalProps>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getQuantity = (quantity: number) => {
    // retrieve quantity value
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.titleWrapper}>
            <Text numberOfLines={2} style={styles.title}>
              {title}
            </Text>
          </View>
          <Counter getQuantity={getQuantity} />
        </View>

        <Text style={styles.price}>{toBRLCurrency(price!)}</Text>

        <Text style={styles.descriptionTitle}>Detalhes</Text>
        <Text style={styles.description}>{description}</Text>

        {/* accent here */}
        <Text style={styles.reviewsTitle}>Avaliacoes</Text>
        <ReviewsCard />

        <Text style={styles.relatedItemsTitle}>Items relacionados</Text>
        <ProductList />

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartTitle}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  relatedItemsTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
  },
  titleWrapper: {
    maxWidth: 159,
  },
  container: {
    backgroundColor: '#F7AFBB',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 2,
  },
  addToCartButton: {
    backgroundColor: '#E593A1',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    marginVertical: 20,
  },
  addToCartTitle: {
    fontSize: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
