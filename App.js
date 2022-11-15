/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'

import HomeScreen from './src/screens/HomeScreen'


const App: () => React$Node = () => {
  
  return (
    <>
      <StatusBar barStyle="dark-content"
                 backgroundColor="#2691af" />
      <HomeScreen/>
    </>
  )
};



export default App;
