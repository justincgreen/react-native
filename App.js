import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();    
  
  const ScreenA = ({navigation}) => {
    const onPressHandler = () => {
      navigation.navigate('Screen_B')
    }
      
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen A</Text>
        <Pressable onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ff9595' : '#ff6262', padding: 10})}>
          <Text style={styles.text}>Go to Screen B</Text>
        </Pressable>
      </View>
    )
  }
  
  const ScreenB = ({navigation}) => {
    const onPressHandler = () => {
      //navigation.navigate('Screen_A');
      navigation.goBack();
    }
    
    return (
      <View style={styles.screenB}>
        <Text style={styles.text}>Screen B</Text>
        <Pressable onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ff9595' : '#ff6262', padding: 10})}>
          <Text style={styles.text}>Go back to Screen A</Text>
        </Pressable>
      </View>
    )
  }
  
  return (
       <NavigationContainer>
         <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name='Screen_A' component={ScreenA} />
          <Stack.Screen name='Screen_B' component={ScreenB} />
         </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40
  },
  screenB: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
