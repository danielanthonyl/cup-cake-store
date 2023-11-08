import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';

import Text from '../../../components/texts/Text';

export type CounterProps = {
  getQuantity(quantity: number): void;
};

export const Counter = ({getQuantity}: Partial<CounterProps>) => {
  const [quantity, setQuantity] = useState(1);
  const isQuantityThreshold = quantity < 2;

  const deduct = () => {
    if (!isQuantityThreshold) {
      setQuantity(quantity - 1);
    }
  };

  const add = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    if (getQuantity) {
      getQuantity(quantity);
    }
  }, [getQuantity, quantity]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={isQuantityThreshold}
        onPress={deduct}
        style={styles.remove}>
        <Text style={styles.removeText}>-</Text>
      </TouchableOpacity>

      <View style={styles.quantity}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>

      <TouchableOpacity onPress={add} style={styles.add}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityText: {
    fontSize: 16,
  },
  quantity: {
    height: 30,
    width: 60,
    backgroundColor: '#E593A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  removeText: {
    fontSize: 16,
  },
  remove: {
    height: 30,
    width: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#F1C7CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 16,
  },
  add: {
    height: 30,
    width: 40,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#F1C7CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
