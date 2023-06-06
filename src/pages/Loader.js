import { StyleSheet, Text, View, Dimensions,Image } from 'react-native'
import React from 'react'

const screenHeight = Dimensions.get('window').height;
const Loader = () => {
  return (
    <View style={{justifyContent:'space-between',alignItems:'center',height: screenHeight-100}}>
        <View><Text></Text></View>
        <View><Image 
          source={require('./Image/uix.png')}
          style={styles.logo1}
        /></View>
        <View><Text>@2022 NINTREA.LIVE</Text></View>
      
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({})