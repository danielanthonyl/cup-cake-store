import {createStackNavigator} from '@react-navigation/stack';
import {Order} from '../../views/order/Order';
import {Cart} from '../../views/cart/Cart';

export enum CART_STACK {
  CART_VIEW = 'ORDER_VIEW',
  ORDER_VIEW = 'ORDER_IN_PROGRESS_VIEW',
}

const Stack = createStackNavigator();

export const CartStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={CART_STACK.CART_VIEW} component={Cart} />
    <Stack.Screen name={CART_STACK.ORDER_VIEW} component={Order} />
  </Stack.Navigator>
);
