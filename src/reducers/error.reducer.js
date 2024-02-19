import { ADD_ERROR, DELETE_ERROR } from '../actions/error.action'

const initialState = { lastId: 0, errorList: [] }

export default function errorReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_ERROR:
			const id = state.lastId + 1
			const newError = { ...action.payload, id: id }
			return {
				lastId: id,
				errorList: [...state.errorList, newError],
			}
		case DELETE_ERROR:
			return { ...initialState, lastId: state.lastId }
		default:
			return state
	}
}
