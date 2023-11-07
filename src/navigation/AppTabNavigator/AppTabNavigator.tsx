import {View} from 'react-native';
import {views} from './views';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => (
  <View style={{backgroundColor: '#F7AFBB', flex: 1}}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#E593A1',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        },
      }}>
      {views.map(({tabBarIcon, ...rest}) => (
        <Tab.Screen
          key={rest.name}
          options={{
            tabBarLabelStyle: {display: 'none'},
            tabBarIcon,
          }}
          {...rest}
        />
      ))}
    </Tab.Navigator>
  </View>
);
