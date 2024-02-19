export const ADD_ERROR = 'ADD_ERROR'
export const DELETE_ERROR = 'DELETE_ERROR'

export const addError = (error, title = 'Erreur') => {
	return (dispatch) => {
		dispatch({
			type: ADD_ERROR,
			payload: { message: error, title: title },
		})
	}
}

export const deleteError = () => {
	return (dispatch) => {
		return dispatch({
			type: DELETE_ERROR,
		})
	}
}
