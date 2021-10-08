import React from 'react';
import { SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    }}>
        <View style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
        }}>
        </View>
        <View style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
          top: 30,
        }}>
        </View>

        <View style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}></View>

    </SafeAreaView>


  );
}