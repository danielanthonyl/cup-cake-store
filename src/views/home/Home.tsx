import {ScrollView, StyleSheet, View} from 'react-native';
import {Header} from './Header';
import {HomeBanner} from './HomeBanner';
import CategoryFilter from './CategoryFilter';
import {ProductList} from '../../components/product/ProductList';
import {Chat} from './Chat';

export const Home = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        bounces={false}>
        <View style={styles.container}>
          <Header />
          <HomeBanner />
          <CategoryFilter />

          <ProductList title="Achamos que vai gostar" />
          <ProductList title="Mais pedidos" />
        </View>
      </ScrollView>
      <Chat />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#F7AFBB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
