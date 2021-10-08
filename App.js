import React from 'react';
import { 
  StyleSheet, Text, Image, 
  SafeAreaView, View, Alert, 
  TouchableOpacity, TouchableHighlight, Button,
  StatusBar, Platform } from 'react-native';

export default function App() {
  const handlePress = () => console.log("element pressed")
  const containerStyle = { backgroundColor: "white" }

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
       <Button 
        color="blue" 
        title="Top Button" 
        onPress={()=> Alert.alert(
          "My Title", 
          "My Message",
          [{ text: "yes"}, {text: "no"}, {text: "dont know"}]
          )
        }/>
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

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0
  },
  textstuff: {
    color: '#000'
  }
});
