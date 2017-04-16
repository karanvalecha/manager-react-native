import React, {Component} from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
	onCreatePress () {
		const {name, phone, shift} = this.props;

		this.props.employeeCreate({name, phone, shift: shift || 'Monday'})
	}

	render() {
		return(
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onCreatePress.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = state => {
	return { name, phone, shift } = state.employeeForm;
}

export default connect(mapStateToProps, {
	employeeUpdate, employeeCreate
})(EmployeeCreate);