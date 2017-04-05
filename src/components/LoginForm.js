import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text)
	}

	onPasswordChange(password) {
		this.props.passwordChanged(password)
	}

	onButtonPress() {
		const {email, password} = this.props;

		this.props.loginUser({email, password})
	}

	render() {
		return(
			<Card>
				<CardSection>
					<Input label="Email" placeholder="user@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
						autoSuggest={false}
					/>
				</CardSection>
				
				<CardSection>
					<Input secureTextEntry placeholder="password"
					onChangeText={this.onPasswordChange.bind(this)}
					label="Password"
					value={this.props.password}
					/>
				</CardSection>
				
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log In
					</Button>
				</CardSection>				
			</Card>
		)
	}
}

const mapStateToProps = state => {
	return { email: state.auth.email, password: state.auth.password }
}

export default connect(mapStateToProps, actions)(LoginForm);