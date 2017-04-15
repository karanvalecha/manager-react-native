import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input } from './common'

const EmployeeCreate = () => {
	return(
		<View>
		<Card>
			<CardSection>
				<Input
					label="Name"
					placeholder="Karan Valecha"
				/>
			</CardSection>

			<CardSection>
				<Input
					label="Phone Number"
					placeholder="9975779947"
				/>
			</CardSection>
		</Card>
		</View>
	)
}

export default EmployeeCreate;