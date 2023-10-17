import {views} from './views';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
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
);
