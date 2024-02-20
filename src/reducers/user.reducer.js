import {
	LOGIN_USER,
	GET_USER,
	SET_NAME_USER,
	LOGOUT_USER,
} from '../actions/user.action'

const initialState = null

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_USER:
			if (action.payload.status === 200) {
				return { ...state, token: action.payload.body.token }
			} else {
				return state
			}
		case GET_USER:
			if (action.payload.status === 200) {
				return { ...state, ...action.payload.body }
			} else {
				return state
			}
		case SET_NAME_USER:
			return { ...state, userName: action.payload }
		case LOGOUT_USER:
			return initialState
		default:
			return state
	}
}
