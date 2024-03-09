import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button} from 'react-native';
import {linking} from './Linking';
import CoinList from './src/screens/CoinList';
import MyCoin from './src/screens/MyCoin';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="listCoin">
        <Stack.Screen
          name="listCoin"
          component={CoinList}
          options={({navigation}) => ({
            title: 'List Coin',
            headerStyle: {
              backgroundColor: '#2E2D3D',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('myCoin')}
                title="My Coin"
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="myCoin"
          component={MyCoin}
          options={{
            title: 'My Coin',
            headerStyle: {
              backgroundColor: '#2E2D3D',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
