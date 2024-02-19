import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/v1/user'

export const LOGIN_USER = 'LOGIN_USER'
export const GET_USER = 'GET_USER'

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
				let errorTitle = ''
				let errorMessage = ''

				if (error.response) {
					switch (error.response.status) {
						case 400:
							errorTitle = 'Error to connect'
							errorMessage = error.response.data.message
							break

						case 500:
							errorTitle = 'Error server to connect'
							errorMessage = error.response.data.message
							break

						default:
							errorTitle = 'Error to connect'
							errorMessage = 'Unknown error'
							break
					}
				} else if (error.request) {
					errorTitle = 'Error server to connect'
					errorMessage = 'The server is not responding'
				} else {
					errorTitle = 'Error to connect'
					errorMessage = error.message
				}

				throw new Error(LOGIN_USER, {
					cause: { message: errorMessage, title: errorTitle },
				})
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
					let errorTitle = ''
					let errorMessage = ''

					if (error.response) {
						switch (error.response.status) {
							case 400:
								errorTitle = 'Error to get user'
								errorMessage = error.response.data.message
								break
							case 404:
								errorTitle = 'Error to get user'
								errorMessage = 'The query does not exist'
								break

							case 500:
								errorTitle = 'Error server to get user'
								errorMessage = error.response.data.message
								break

							default:
								errorTitle = 'Error to get user'
								errorMessage = 'Unknown error'
								break
						}
					} else if (error.request) {
						errorTitle = 'Error server to get user'
						errorMessage = 'The server is not responding'
					} else {
						errorTitle = 'Error to get user'
						errorMessage = error.message
					}

					throw new Error(GET_USER, {
						cause: { message: errorMessage, title: errorTitle },
					})
				})
		}
	} else {
		return (dispatch) => {
			return dispatch({
				type: GET_USER,
				payload: {},
			})
		}
	}
}
