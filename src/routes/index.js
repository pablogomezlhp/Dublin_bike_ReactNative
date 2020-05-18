import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Results from '../pages/Results';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#E5E5E5',
      },
    }}>
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="Results" component={Results} />
  </Auth.Navigator>
);

export default AuthRoutes;
