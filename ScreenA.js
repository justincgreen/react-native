import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

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
  
 const styles=StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 40
	}
 });
  
export default ScreenA;