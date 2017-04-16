import React, {Component} from 'react';
import _ from 'lodash';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { Spinner } from './common';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();
		this.createDataSource(this.props);
		this.loading = true;
	}

	componentWillReceiveProps(newProps) {
		// new props with which this component will render
		this.createDataSource(newProps);
		this.loading = false;
	}

	createDataSource({employees}) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})

		this.dataSource = ds.cloneWithRows(employees)
	}

	renderRow(employee) {
		return <ListItem employee={employee} />
	}

	render() {
		if (this.loading) {
			return <Spinner text="Fetching Employee List" />
		} else {
			return(
				<ListView
					enableEmptySections
					dataSource={this.dataSource}
					renderRow={this.renderRow}
				/>
			)
		}
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid }
	})
	return { employees };
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);