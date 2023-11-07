import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from './Header';
import {CartSummaryList} from './OrderSummaryList';
import {DeliveryDetails} from './DeliveryDetails';
import Text from '../../components/texts/Text';
import {Chat} from 'phosphor-react-native';

export const Order = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />

        <View>
          <CartSummaryList />
        </View>

        <View style={styles.talkWithStore}>
          <Chat />
          <Text>Chat com a loja</Text>
        </View>

        <DeliveryDetails />

        <TouchableOpacity style={styles.checkout}>
          <Text style={styles.checkoutText}>Cancelar pedido</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkout}>
          <Text style={styles.checkoutText}>Reportar erro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkout}>
          <Text style={styles.checkoutText}>Ajuda</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  checkout: {
    alignSelf: 'center',
    marginTop: 10,
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
  talkWithStore: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    marginVertical: 30,
  },
});
