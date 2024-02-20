import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/v1/user'

export const LOGIN_USER = 'LOGIN_USER'
export const GET_USER = 'GET_USER'
export const SET_NAME_USER = 'SET_NAME_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const loginUser = (email, password, remember = false) => {
	return (dispatch) => {
		return axios
			.post(baseUrl + '/login', {
				email: email,
				password: password,
			})
			.then((result) => {
				if (remember) {
					localStorage.setItem('token', result.data.body.token)
				}
				dispatch({
					type: LOGIN_USER,
					payload: result.data,
				})
			})
			.catch((error) => {
				errorHandling(error, 'connect', LOGIN_USER)
			})
	}
}

export const getUser = (token) => {
	if (token) {
		return (dispatch) => {
			return axios
				.post(baseUrl + '/profile', null, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((result) => {
					dispatch({
						type: GET_USER,
						payload: result.data,
					})
				})
				.catch((error) => {
					errorHandling(error, 'get user', GET_USER)
				})
		}
	} else {
		return (dispatch) => {
			return dispatch({
				type: LOGOUT_USER,
			})
		}
	}
}

export const setNameUser = (token, username) => {
	if (token) {
		return (dispatch) => {
			return axios
				.put(
					baseUrl + '/profile',
					{ userName: username },
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				)
				.then((result) => {
					dispatch({
						type: SET_NAME_USER,
						payload: username,
					})
				})
				.catch((error) => {
					errorHandling(error, 'set username', SET_NAME_USER)
				})
		}
	} else {
		return (dispatch) => {
			return dispatch({
				type: LOGOUT_USER,
			})
		}
	}
}

export const logoutUser = () => {
	return (dispatch) => {
		if (localStorage.getItem('token')) {
			localStorage.removeItem('token')
		}
		dispatch({
			type: LOGOUT_USER,
		})
	}
}

const errorHandling = (error, title, actionType) => {
	let errorTitle = ''
	let errorMessage = ''

	if (error.response) {
		switch (error.response.status) {
			case 400:
				errorTitle = 'Error to ' + title
				errorMessage = error.response.data.message
				break
			case 404:
				errorTitle = 'Error to ' + title
				errorMessage = 'The query does not exist'
				break

			case 500:
				errorTitle = 'Error server to ' + title
				errorMessage = error.response.data.message
				break

			default:
				errorTitle = 'Error to ' + title
				errorMessage = 'Unknown error'
				break
		}
	} else if (error.request) {
		errorTitle = 'Error server to ' + title
		errorMessage = 'The server is not responding'
	} else {
		errorTitle = 'Error to ' + title
		errorMessage = error.message
	}

	throw new Error(actionType, {
		cause: { message: errorMessage, title: errorTitle },
	})
}
