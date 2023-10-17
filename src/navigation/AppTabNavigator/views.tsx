import {View} from 'react-native';
import {House, Handbag, Article, User} from 'phosphor-react-native';
import {HomeStackNavigator} from '../HomeStackNavigator/HomeStackNavigator';

export const views = [
  {
    name: 'home_view',
    component: HomeStackNavigator,
    tabBarIcon: () => <House />,
  },
  {
    name: 'cart_view',
    component: View,
    tabBarIcon: () => <Handbag />,
  },
  {
    name: 'orders_view',
    component: View,
    tabBarIcon: () => <Article />,
  },
  {
    name: 'profile_view',
    component: View,
    tabBarIcon: () => <User />,
  },
];
