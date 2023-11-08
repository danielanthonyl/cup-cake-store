import {View} from 'react-native';
import {House, Article, User} from 'phosphor-react-native';
import {HomeStackNavigator} from '../HomeStackNavigator/HomeStackNavigator';
import {CartStackNavigator} from '../OrderStackNavigator/CartStackNavigator';
import {CartTabIcon} from './CartTabIcon';

export enum APP_TAB {
  HOME = 'HOME_STACK',
  CART = 'CART_VIEW',
  ORDER = 'ORDER_STACK',
  PROFILE = 'PROFILE_VIEW',
}

export const views = [
  {
    name: APP_TAB.HOME,
    component: HomeStackNavigator,
    tabBarIcon: () => <House color="white" />,
  },
  {
    name: APP_TAB.CART,
    component: CartStackNavigator,
    tabBarIcon: () => <CartTabIcon />,
  },
  {
    name: APP_TAB.ORDER,
    component: View,
    tabBarIcon: () => <Article color="white" />,
  },
  {
    name: APP_TAB.PROFILE,
    component: View,
    tabBarIcon: () => <User color="white" />,
  },
];
