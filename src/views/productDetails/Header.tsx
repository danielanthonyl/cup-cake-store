import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'phosphor-react-native';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export type HeaderProps = {
  image: string;
};

export const Header = ({image}: HeaderProps) => {
  const {goBack} = useNavigation();

  const goBackHandler = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBackHandler}>
        <ArrowLeft />
      </TouchableOpacity>

      <Image style={styles.image} resizeMode="contain" source={{uri: image}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: undefined,
    height: 200,
  },
});
