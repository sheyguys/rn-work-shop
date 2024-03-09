import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button} from 'react-native';
import {linking} from './Linking';
import CoinList from './src/screens/CoinList';
import MyCoin from './src/screens/MyCoin';
import {Provider as RNProvider} from 'react-redux';
import {configureStore} from './src/stores/store';

export default function App() {
  const Stack = createNativeStackNavigator();
  const store = configureStore();

  return (
    <RNProvider store={store}>
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
    </RNProvider>
  );
}
