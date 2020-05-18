import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {View, StatusBar} from 'react-native';

import Routes from './routes';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
