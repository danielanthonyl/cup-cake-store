import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'phosphor-react-native';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

export const Header = () => {
  const {goBack} = useNavigation();

  const goBackHandler = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBackHandler}>
        <ArrowLeft />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
