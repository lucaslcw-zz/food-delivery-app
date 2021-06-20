import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '~/screens/Home';

const Tab = createBottomTabNavigator();

const AppRoutes = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
    />
  </Tab.Navigator>
);

export default AppRoutes;
