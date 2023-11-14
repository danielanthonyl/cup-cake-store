import {View, StyleSheet} from 'react-native';
import Text from '../../components/texts/Text';

export const DeliveryDetails = () => {
  const userData = {
    address: 'Av. Exemplo 123',
    document: '164.779.345-04',
    paymentMethod: 'Pagar no ato da entrega',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dados da entrega</Text>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderTableData}>CPF</Text>
          <Text style={styles.tableHeaderTableData}>Endereço</Text>
          <Text style={styles.tableHeaderTableData}>Forma de pagamento</Text>
        </View>

        <View style={styles.tableBody}>
          <Text>{userData.document}</Text>
          <Text>{userData.address}</Text>
          <Text>{userData.paymentMethod}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  tableHeaderTableData: {
    fontWeight: '600',
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
  },
  tableHeader: {
    gap: 10,
  },
  tableBody: {
    gap: 10,
    alignItems: 'flex-end',
  },
});
