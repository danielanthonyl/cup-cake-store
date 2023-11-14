import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'phosphor-react-native';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../../components/texts/Text';
import {HOME_STACK} from '../../navigation/HomeStackNavigator/HomeStackNavigator';

export const Header = () => {
  const {navigate} = useNavigation();

  const goBackHandler = () => {
    navigate(HOME_STACK.HOME as never);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBackHandler}>
        <ArrowLeft />
        <View style={styles.info}>
          <Text style={styles.infoText}>
            Aguarde, os seus cupcakes já estão indo ate você.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  info: {
    maxWidth: 300,
    marginVertical: 20,
  },
  infoText: {
    fontSize: 16,
  },
});
