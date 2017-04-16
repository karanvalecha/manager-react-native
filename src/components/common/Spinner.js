import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

class Spinner extends Component{
	render() {
		return(
			<View style={styles.spinnerStyle}>
				<ActivityIndicator size={this.props.size || 'large'} />
				{this.renderTextMessage(this.props.text)}
			</View>
		)
	}
	renderTextMessage(text) {
		if(text)
			return <Text style={styles.textStyle}> {text} </Text>
	}
}


const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textStyle: {
		color: '#aaa',
		fontSize: 9
	}
}

export { Spinner }