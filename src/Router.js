import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{marginTop: Platform.OS === 'android' ? 50 : 65 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
			</Scene>
			<Scene key="main" direction="vertical" >
				<Scene key="employeeList"
					component={EmployeeList}
					title="Employee List"
					rightTitle="Add"
					onRight={() => Actions.employeeCreate() }
					panHandlers={null}
				/>
				<Scene key="employeeCreate" component={EmployeeCreate}
					title="Employee Create" panHandlers={null} />
				<Scene key="employeeEdit" component={EmployeeEdit}
					title="Edit Employee" panHandlers={null} />
			</Scene>
		</Router>
	)
}

export default RouterComponent;