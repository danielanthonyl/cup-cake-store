import {NavigationContainer} from '@react-navigation/native';
import {AppTabNavigator} from './AppTabNavigator/AppTabNavigator';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
};
