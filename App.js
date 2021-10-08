import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View, Alert, TouchableOpacity, TouchableHighlight, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log("element pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textstuff}>
        Hello World! Kirty mah love !😍
      </Text>
      <Text style={styles.textstuff} numberOfLines={1} onPress={handlePress}>Amazing First App</Text>
      
      <Image source={require("./assets/favicon.png")} />
      <TouchableOpacity onPress={handlePress}>
        <View style={{ width:100, height: 70, backgroundColor: 'dodgerblue' }}>
            
        </View>
      </TouchableOpacity>
      <Button 
        color="orange" 
        title="Click Me" 
        onPress={()=> Alert.alert("My Title", "My Message", [
          { text: "Yes", onPress: ()=> console.log("Yes") },
          { text: "No", onPress: ()=> console.log("No")}
        ])
        }/>

        <Button 
        color="blue" 
        title="Prompt Me" 
        onPress={()=> Alert.prompt("My Title", "My Message", text => console.log(text) )
        }/>
      <TouchableHighlight onPress={handlePress}>
          <Image 
            source={{ 
              uri: "https://picsum.photos/200/300" ,
              width: 200,
              height: 300,
            }}
          /> 
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstuff: {
    color: '#000'
  }
});
