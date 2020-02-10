import React from 'react';
import { View } from 'react-native';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Harvest from './components/Harvest';   

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Login />
      <SignUp />
    </View>
  )
}
