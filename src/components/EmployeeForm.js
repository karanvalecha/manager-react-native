import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
	render() {
		return (
			<View>
				<CardSection>
					<Input
						label="Name"
						placeholder="Karan Valecha"
						value={this.props.name}
						onChangeText={value => this.props.employeeUpdate(
							{ prop: 'name', value }
						)}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="9975779947"
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate(
							{ prop: 'phone', value }
						)}
						keyboardType={'numeric'}
					/>
				</CardSection>

				<CardSection style={{flexDirection: 'column'}}>
					<Text style={{fontSize: 18, paddingLeft: 5}}>Shift</Text>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate(
							{prop: 'shift', value}
						)}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>
			</View>
		)
	}
}

const mapStateToProps = state => {
	const {name, phine, shift} = state.employeeForm;

	return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);