import { LOGIN_USER, LOGOUT_USER, GET_USER } from '../actions/user.action'

const initialState = null

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_USER:
			if (action.payload.status === 200) {
				return { ...state, token: action.payload.body.token }
			} else {
				return state
			}
		case LOGOUT_USER:
			return initialState
		case GET_USER:
			if (action.payload.status === 200) {
				return { ...state, ...action.payload.body }
			} else {
				return state
			}
		default:
			return state
	}
}
