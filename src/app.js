import React, { Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {
	comonentWillMount() {
		const config = {
		  apiKey: 'AIzaSyBJLWgW-81mUk7FpKa0gPjAonerdp9F2PY',
		  authDomain: 'manager-aa974.firebaseapp.com',
		  databaseURL: 'https://manager-aa974.firebaseio.com',
		  projectId: 'manager-aa974',
		  storageBucket: 'manager-aa974.appspot.com',
		  messagingSenderId: '317838077977'
		};
		firebase.initializeApp(config);
	}

	render() {
		// 2nd arg is additional initialization for reducers - More of a server side rendering
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		)
	}
}

export default App;