import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from './Header';
import {CartSummaryList} from './CartSummaryList';
import {DeliveryDetails} from './DeliveryDetails';
import Text from '../../components/texts/Text';
import {useNavigation} from '@react-navigation/native';
import {CART_STACK} from '../../navigation/OrderStackNavigator/CartStackNavigator';
import {HOME_STACK} from '../../navigation/HomeStackNavigator/HomeStackNavigator';
import {useCartStatus} from '../../hooks/useCartStatus';

export const Cart = () => {
  const {navigate} = useNavigation();
  const hasCartData = useCartStatus();

  const goToHome = () => {
    navigate(HOME_STACK.HOME as never);
  };

  if (!hasCartData) {
    return (
      <View style={styles.emptyStateContainer}>
        {/* accent goes here */}
        <Text style={styles.emptyStateTitle}>O seu carrinho esta vazio.</Text>
        <TouchableOpacity
          style={styles.emptyStateButtonContainer}
          onPress={goToHome}>
          <Text style={styles.emptyStateButtonText}>
            Aperte aqui para ir a lista de produtos.
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <Header />

        <View>
          <CartSummaryList />
        </View>

        <DeliveryDetails />

        <TouchableOpacity>
          <Text style={styles.link}>Alterar dados da entrega</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.checkout}
          onPress={() => navigate(CART_STACK.ORDER_VIEW as never)}>
          <Text style={styles.checkoutText}>Confirmar pedido</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  checkout: {
    alignSelf: 'center',
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '100%',
    borderRadius: 40,
    backgroundColor: '#E593A1',
  },
  checkoutText: {
    fontSize: 16,
  },
  link: {
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop: 20,
  },
  container: {
    backgroundColor: '#F7AFBB',
    flex: 1,
    padding: 20,
    gap: 10,
  },
  emptyStateContainer: {
    backgroundColor: '#F7AFBB',
    flex: 1,
    padding: 20,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateTitle: {
    fontSize: 22,
  },
  emptyStateButtonContainer: {},
  emptyStateButtonText: {
    textDecorationLine: 'underline',
    marginTop: 10,
    fontSize: 14,
  },
});
