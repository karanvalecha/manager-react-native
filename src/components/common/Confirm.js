import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Confirm = ({children, visible, onAccept, onReject}) => {
	const {cardSectionStyle, containerStyle, textStyle} = styles;
	return(
		<Modal
			visible={visible}
			transparent
			animation="slide"
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>{children}</Text>
				</CardSection>

				<CardSection style={cardSectionStyle}>
					<Button onPress={onAccept}> Yes</Button>
					<Button onPress={onReject}>No</Button>
				</CardSection>
			</View>
		</Modal>
	)
}

const styles = {
	cardSectionStyle: {
		marginHorizontal: 30,
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
}

export { Confirm }