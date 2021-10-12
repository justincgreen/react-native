import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Header from './components/Header';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  
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
  
});
