import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Header from './components/Header';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const Stack = createStackNavigator();
  //const Tab = createBottomTabNavigator();
  const Tab = createMaterialBottomTabNavigator();
  
  return (
       /* <NavigationContainer>
         <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name='Screen_A' component={ScreenA} />
          <Stack.Screen name='Screen_B' component={ScreenB} />
         </Stack.Navigator>
      </NavigationContainer> */
      
      <NavigationContainer>
         <Tab.Navigator 
         screenOptions={({route}) => ({
           tabBarIcon: ({focused, size, color}) => {
             let iconName;
             
             if(route.name === 'Screen_A') {
               iconName = 'anchor';
               size = focused ? 25 : 20;
               color = focused ? '#ff9595' : '#fff';
             }else if(route.name === 'Screen_B') {
               iconName = 'btc';
               size = focused ? 25 : 20;
               color = focused ? '#ff9595' : '#fff';
             }
             return (
               <FontAwesome5 name={iconName} size={size} color={color} />
             )
           }
         })}
         tabBarOptions={{
           showLabel: false
         }}
         activeColor='#fff'
         barStyle={{backgroundColor: '#694fad'}}
         labeled={false}
         >
          <Tab.Screen name='Screen_A' component={ScreenA} />
          <Tab.Screen name='Screen_B' component={ScreenB} />
         </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
