import React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Menu from '~/screens/Menu';

const Tab = createBottomTabNavigator();

const AppRoutes = () => (
  <Tab.Navigator initialRouteName="Menu">
    <Tab.Screen
      name="Menu"
      component={Menu}
      options={{
        title: 'Cardápio',
        tabBarIcon: ({ color, size }: any) => <Ionicons name="fast-food" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Ordered"
      component={Menu}
      options={{
        title: 'Pedidos',
        tabBarIcon: ({ color, size }: any) => <Entypo name="list" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Menu}
      options={{
        title: 'Ajustes',
        tabBarIcon: ({ color, size }: any) => <Ionicons name="ios-settings" size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

export default AppRoutes;
