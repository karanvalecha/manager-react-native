import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'

export const emailChanged = (text) => {
	return({
		type: 'email_changed',
		payload: text
	});
}

export const passwordChanged = (password) => {
	return({
		type: 'password_changed',
		payload: password
	})
}

export const loginUser = ({email, password}) => {
	const config = {
	  apiKey: 'AIzaSyBJLWgW-81mUk7FpKa0gPjAonerdp9F2PY',
	  authDomain: 'manager-aa974.firebaseapp.com',
	  databaseURL: 'https://manager-aa974.firebaseio.com',
	  projectId: 'manager-aa974',
	  storageBucket: 'manager-aa974.appspot.com',
	  messagingSenderId: '317838077977'
	};
	try{
		firebase.app()
	}
	catch(e) {
		firebase.initializeApp(config)
	}

	return (dispatch) => {
		dispatch({
			type: 'login_user',
			payload: null
		})
		loginUserSuccess(null, dispatch)
		// firebase.auth().signInWithEmailAndPassword(email, password)
		// 	.then( user => loginUserSuccess(user, dispatch)).catch((error) => {
		// 		dispatch({type: 'login_user_failure', payload: error.message})
		// 	});
	}
}

const loginUserSuccess = (user, dispatch) => {
	dispatch({type: 'login_user_success', payload: user})
	Actions.main({type: 'reset'});
}
