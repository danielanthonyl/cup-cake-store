import {TextInputProps, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Input} from './Input';
import {MagnifyingGlass} from 'phosphor-react-native';

export const Search = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      <Input style={[props.style, styles.input]} {...props} />
      <TouchableOpacity style={styles.icon}>
        <MagnifyingGlass />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 43,
    backgroundColor: '#FAD1D8',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderRadius: 100,
    paddingLeft: 10,
  },
  icon: {
    flex: 0.1,
  },
});
