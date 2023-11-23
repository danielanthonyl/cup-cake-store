import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../../views/home/Home';
import {ProductDetails} from '../../views/productDetails/ProductDetails';

export enum HOME_STACK {
  HOME = 'HOME_VIEW',
  PRODUCT_DETAILS = 'PRODUCT_DETAILS_VIEW',
}

export type HomeTypes = ReturnType<() => HOME_STACK>;

const Stack = createStackNavigator();
export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={HOME_STACK.HOME} component={Home} />
    <Stack.Screen
      name={HOME_STACK.PRODUCT_DETAILS}
      component={ProductDetails}
    />
  </Stack.Navigator>
);
