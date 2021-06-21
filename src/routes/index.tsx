import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '~/screens/Splash';
import AppRoutes from '~/routes/app.routes';
import AuthRoutes from '~/routes/auth.routes';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AppRoutes"
        component={AppRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthRoutes"
        component={AuthRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
