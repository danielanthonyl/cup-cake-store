import {StyleSheet, TouchableOpacity} from 'react-native';
import {Chat as PChat} from 'phosphor-react-native';
import Text from '../../components/texts/Text';

export const Chat = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <PChat color="white" />
      {/* accent here */}
      <Text style={styles.text}>Duvidas?</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
  container: {
    position: 'absolute',
    top: '76%',
    right: 0,

    backgroundColor: '#E593A1DE',
    opacity: 0.9,
    height: 109,
    width: 109,
    borderRadius: 56,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
});
