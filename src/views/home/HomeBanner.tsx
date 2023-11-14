import {StyleSheet} from 'react-native';
import Text from '../../components/texts/Text';
import {Banner} from '../../components/banners/Banner';

export const HomeBanner = () => {
  return (
    <Banner style={styles.banner}>
      {/* accent here */}
      <Text style={styles.title}>Ola produtora de eventos!</Text>
      <Text style={styles.subtitle}>Deseja solicitar um stand de vendas?</Text>
      <Text style={styles.label}>
        <Text style={styles.link}>aperte aqui</Text> para comecar!
      </Text>
    </Banner>
  );
};

const styles = StyleSheet.create({
  banner: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
  },
  label: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '400',
  },
  link: {
    textDecorationLine: 'underline',
  },
});
