import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import MapComponent from '../../components/MapComponent'

const HomeScreen = ({props}) => {
  return (
    <View>
      {/* Map Compnent*/}
      <MapComponent/>
    </View>
  )
}

const styles= StyleSheet.create({
    homeText: {
        color: '#000'
    }
})

export default HomeScreen