import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/screens/Navigation/TabNav';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </View>
  )
}

export default App;