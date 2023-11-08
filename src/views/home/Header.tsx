import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Search} from '../../components/inputs/Search';
import {Bell} from 'phosphor-react-native';

export const Header = () => (
  <View style={styles.header}>
    <Search placeholder="Buscar" />
    <TouchableOpacity>
      <Bell />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F7AFBB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
