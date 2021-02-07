import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen'
import HomeScreen from './screens/HomeScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import { Switch } from 'react-native-gesture-handler';

export default function App() {
  return (
   <AppContainer/>
  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen :WelcomeScreen},
  HomeScreen: {screen:HomeScreen}
})
const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
