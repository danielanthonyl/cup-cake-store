import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/texts/Text';
import {Cupcake} from '../../components/icons/Cupcake';
import {Free} from '../../components/icons/Free';
import {CupcakeHeart} from '../../components/icons/CupcakeHeart';
import {Cart} from '../../components/icons/Cart';

const CategoryFilter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todas as categorias</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.iconsWrapper}>
          <Cupcake />
          <Text>Cupcakes</Text>
        </View>

        <View style={styles.iconsWrapper}>
          <Free />
          <Text>0% Lactose</Text>
        </View>

        <View style={styles.iconsWrapper}>
          <CupcakeHeart />
          <Text>Mais Pedidos</Text>
        </View>

        <View style={styles.iconsWrapper}>
          <Cart />
          <Text>Do Dia</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
  container: {
    marginTop: 21,
    fontSize: 16,
    fontWeight: '400',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconsWrapper: {
    alignItems: 'center',
  },
});

export default CategoryFilter;
