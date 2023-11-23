import {Heart} from 'phosphor-react-native';
import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Text from '../texts/Text';
import {toBRLCurrency} from '../../helpers/toBRLCurrency';
import {useNavigation} from '@react-navigation/native';
import {HOME_STACK} from '../../navigation/HomeStackNavigator/HomeStackNavigator';

export type ProductProps = {
  id: string;
  title: string;
  ingredients: string;
  price: number;
  image: string;
};

export const Product = ({
  id,
  ingredients,
  image,
  price,
  title,
}: Partial<ProductProps>) => {
  const {navigate} = useNavigation();

  const onProductPress = () => {
    //@ts-ignore
    navigate(HOME_STACK.PRODUCT_DETAILS, {id});
  };

  return (
    <TouchableOpacity onPress={onProductPress} style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.icon}>
          <Heart size={30} weight="fill" color="#CE8F99" />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: image}}
        />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={2} style={styles.ingredients}>
        {ingredients}
      </Text>
      <Text style={styles.price}>{toBRLCurrency(price!)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 46,
    width: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: 163,
  },
  card: {
    padding: 10,
    backgroundColor: '#F1C7CE',
    width: 163,
    height: 127,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 15,
  },
  ingredients: {
    fontSize: 12,
    color: '#696969',
  },
  price: {
    fontSize: 12,
    color: '#4F4F4F',
    fontWeight: 'bold',
  },
});
