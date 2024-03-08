import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import ListCoin from './src/screens/ListCoin';
import MyCoin from './src/screens/MyCoin';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="listCoin">
        <Stack.Screen name="listCoin" component={ListCoin} />
        <Stack.Screen name="myCoin" component={MyCoin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
