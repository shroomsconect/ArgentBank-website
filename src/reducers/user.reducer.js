import {
	LOGIN_USER,
	GET_USER,
	SET_NAME_USER,
	LOGOUT_USER,
} from '../actions/user.action'

const initialState = { isConnected: false }

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_USER:
			if (action.payload.status === 200) {
				return {
					...state,
					token: action.payload.body.token,
					isConnected: true,
				}
			} else {
				return { ...state, isConnected: false }
			}
		case GET_USER:
			if (action.payload.status === 200) {
				return { ...state, ...action.payload.body, isConnected: true }
			} else {
				return { ...state, isConnected: false }
			}
		case SET_NAME_USER:
			return { ...state, userName: action.payload }
		case LOGOUT_USER:
			return initialState
		default:
			return { ...state, isConnected: false }
	}
}
