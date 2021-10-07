import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("text pressed")
  console.log(require("./assets/favicon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textstuff}>
        Hello World! Kirty mah love !😍
      </Text>
      <Text style={styles.textstuff} numberOfLines={1} onPress={handlePress}>Amazing First App</Text>
      <Image source={require("./assets/favicon.png")} />
      <Image 
        blurRadius={1}
        source={{ 
          uri: "https://picsum.photos/200/300" ,
          width: 200,
          height: 300,
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstuff: {
    color: '#fff'
  }
});
