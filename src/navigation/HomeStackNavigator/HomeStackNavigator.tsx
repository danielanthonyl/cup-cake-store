import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

const Stack = createStackNavigator();
export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="home_view" component={View} />
  </Stack.Navigator>
);
