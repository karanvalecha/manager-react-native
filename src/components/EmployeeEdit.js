import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'

class EmployeeEdit extends Component {
	state = {showModal: false}

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({value, prop})
		})
	}

	onButtonPress() {
		const {name, phone, shift} = this.props;
		this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
	}

	onReject() {
		this.setState({showModal: false})
	}

	onAccept() {
		this.props.employeeDelete({uid: this.props.employee.uid})
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Save changes
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={() => {this.setState({showModal: true})}}>
						Fire Employee
					</Button>
				</CardSection>

				<Confirm visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onReject={this.onReject.bind(this)}>
					Are you sure?
				</Confirm>
			</Card>
		)
	}
}

const mapStateToProps = state => {
	return { name, phone, shift } = state.employeeForm;
}

export default connect(mapStateToProps, {
	employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);