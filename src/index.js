import React from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from './components/navigation';

export default () => (
  <View flex={1}>
    <StatusBar
      hidden
    />
    <Navigation />
  </View>);
