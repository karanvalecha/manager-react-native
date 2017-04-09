import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
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

	renderButton() {
		if (this.props.loading){
			return <Spinner size="large" />
		}
		return(
			<Button onPress={this.onButtonPress.bind(this)}>
				Log In
			</Button>
		);
	}
	render() {
		return(
			<Card>
				<CardSection>
					<Input label="Email" placeholder="user@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				
				<CardSection>
					<Input secureTextEntry placeholder="password"
					onChangeText={this.onPasswordChange.bind(this)}
					label="Password"
					value={this.props.password}
					/>
				</CardSection>

				{/*Just for Error*/}
				<Text style={styles.textStyle}>{this.props.error}</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = state => {
	return { email, password, error, loading } = state.auth;
}

const styles = {
	textStyle: {
		color: 'red',
		fontSize: 18,
		alignSelf: 'center'
	}
}

export default connect(mapStateToProps, actions)(LoginForm);