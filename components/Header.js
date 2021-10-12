import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>Logo</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		padding: 20,
		paddingTop: 60,
		position: 'absolute',
		top: 0,
		backgroundColor: '#ff6262'
	},
	text: {
		textAlign: 'center'
	}
})

export default Header;
