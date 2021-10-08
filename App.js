import React from 'react';
import { 
  StyleSheet, Text, Image, 
  SafeAreaView, View, Alert, 
  TouchableOpacity, TouchableHighlight, Button,
  StatusBar, Platform, Dimensions } from 'react-native';

import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  const handlePress = () => console.log("element pressed")
  const containerStyle = { backgroundColor: "white" }
  console.log(useDimensions())

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '30%'
      }}></View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0
  },
  textstuff: {
    color: '#000'
  }
});
