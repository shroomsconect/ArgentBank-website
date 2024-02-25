import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUser, GET_USER } from '../../actions/user.action'
import { addError } from '../../actions/error.action'

import { isEmptyData } from '../'

export const useIsConnected = (
	connectionStatusMustBe,
	elseRedirect = false,
	usedIsConnected = true,
) => {
	const [userIsGet, setUserIsGet] = useState(false)
	const user = useSelector((state) => state.userReducer)
	const isConnected = user.isConnected
	const token = localStorage.getItem('token')
	const dispatch = useDispatch()

	const errorHandling = (error) => {
		if (error.message === GET_USER) {
			dispatch(addError(error.cause.message, error.cause.title))
		} else {
			dispatch(addError(error.message, 'Error to get user'))
		}
	}

	const connectionHandling = () => {
		switch (connectionStatusMustBe) {
			case 'mustBeConnected':
				if (isConnected) {
					if (usedIsConnected) {
						return [isConnected, false]
					} else {
						return false
					}
				} else {
					if (elseRedirect) {
						if (usedIsConnected) {
							return [isConnected, elseRedirect]
						} else {
							return elseRedirect
						}
					} else {
						return isConnected
					}
				}

			case 'mustBeNotConnected':
				if (!isConnected) {
					if (usedIsConnected) {
						return [isConnected, false]
					} else {
						return false
					}
				} else {
					if (elseRedirect) {
						if (usedIsConnected) {
							return [isConnected, elseRedirect]
						} else {
							return elseRedirect
						}
					} else {
						return isConnected
					}
				}

			case 'mustBeConnectedOrNot':
			default:
				return isConnected
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!isConnected) {
					if (!isEmptyData(user.token)) {
						await dispatch(getUser(user.token))
					} else if (token) {
						await dispatch(getUser(token))
					}
				} else {
					if (!isEmptyData(user.token)) {
						await dispatch(getUser(user.token))
					}
				}
			} catch (error) {
				errorHandling(error)
			}
			setUserIsGet(true)
		}
		fetchData()
		// eslint-disable-next-line
	}, [])

	if (userIsGet) {
		return connectionHandling()
	} else {
		if (elseRedirect) {
			if (usedIsConnected) {
				return [undefined, false]
			} else {
				return false
			}
		} else {
			return undefined
		}
	}
}
