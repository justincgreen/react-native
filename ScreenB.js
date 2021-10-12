import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

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
  
  const styles=StyleSheet.create({
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
  
  export default ScreenB;