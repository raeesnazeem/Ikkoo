import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MapComponent = () => {
  return (
    <View style={styles.mapBackground}>
      <Text style={styles.mapText}>I am the MapComponent</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    mapBackground: {
        backgroundColor: '#2691af',
        height: 300,      
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapText: {
        color: '#000',
        fontSize:25
    }
})

export default MapComponent