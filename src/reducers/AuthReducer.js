const INITIAL_STATE = { email: '', password: '', error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case 'email_changed':
			return { ...state, email: action.payload };
		case 'password_changed':
			return { ...state, password: action.payload };
		case 'login_user':
			return { ...state, user: action.payload, loading: true }
		case 'login_user_success':
			return { ...state, user: action.payload, error: '', loading: true }
		case 'login_user_failure':
			return { ...state, password: '', error: action.payload, loading: false}
		default:
			return state;
	}
}