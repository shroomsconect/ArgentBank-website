import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { getUser, GET_USER } from '../actions/user.action'
import { addError } from '../actions/error.action'

import { isEmptyData } from '.'

const WhetherConnected = ({ children, elseRedirectTo }) => {
	const [isNotConnected, setIsNotConnected] = useState(false)
	const user = useSelector((state) => state.userReducer)
	const token = localStorage.getItem('token')
	const dispatch = useDispatch()

	const errorHandling = (error) => {
		if (error.message === GET_USER) {
			dispatch(addError(error.cause.message, error.cause.title))
		} else {
			dispatch(addError(error.message, 'Error to get user'))
		}
	}

	useEffect(() => {
		try {
			if (isEmptyData(user)) {
				if (token) {
					dispatch(getUser(token))
				} else {
					setIsNotConnected(true)
				}
			} else {
				dispatch(getUser(user.token))
			}
		} catch (error) {
			errorHandling(error)
		}
		// eslint-disable-next-line
	}, [])

	if (isNotConnected) {
		return <Navigate to={elseRedirectTo} replace />
	}

	if (isEmptyData(user)) {
		return null
	}

	return children
}

WhetherConnected.propTypes = {
	children: PropTypes.node.isRequired,
}

export default WhetherConnected
