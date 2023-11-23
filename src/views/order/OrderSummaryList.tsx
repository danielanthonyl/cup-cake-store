import {View, StyleSheet} from 'react-native';
import Text from '../../components/texts/Text';
import {toBRLCurrency} from '../../helpers/toBRLCurrency';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

export const CartSummaryList = () => {
  const {cartproducts} = useSelector((store: RootState) => {
    return store.cartReducer;
  });

  return (
    <View>
      <Text style={styles.header}>Detalhes do pedido</Text>

      <View style={styles.container}>
        {/* cart reduce goes here */}
        {cartproducts.map(({id, quantity, totalPrice, ingredients, name}) => (
          <View key={id} style={styles.cardItem}>
            <Text style={styles.quantity}>{quantity}x</Text>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.ingredients} numberOfLines={1}>
                {ingredients}
              </Text>
            </View>

            <Text style={styles.price}>{toBRLCurrency(totalPrice)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredients: {
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  quantity: {
    color: '#4F4F4F',
    fontSize: 14,
  },
  container: {
    backgroundColor: '#F1C7CE',
    borderRadius: 23,
    padding: 20,
  },
  cardItem: {
    flexDirection: 'row',
    gap: 10,
  },
  titleContainer: {
    maxWidth: 300,
    marginBottom: 20,
  },
  price: {
    marginLeft: 'auto',
  },
  header: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 10,
  },
});
