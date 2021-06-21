import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';

const Stack = createStackNavigator();

const AuthRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerLeft: () => null,
        headerTitle: 'Entrar',
        headerTintColor: '#333',
        headerStyle: {
          backgroundColor: '#f7f7f7',
          shadowRadius: 0,
          shadowOffset: { width: 0, height: 0 },
        },
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerTitle: 'Cadastro',
        headerTintColor: '#333',
        headerStyle: {
          backgroundColor: '#f7f7f7',
          shadowRadius: 0,
          shadowOffset: { width: 0, height: 0 },
        },
      }}
    />
  </Stack.Navigator>
);

export default AuthRoutes;
