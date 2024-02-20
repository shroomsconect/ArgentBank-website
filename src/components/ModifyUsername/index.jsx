import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setNameUser, SET_NAME_USER } from '../../actions/user.action'
import { addError } from '../../actions/error.action'

import Button from '../Button'

import './index.scss'

function ModifyUsername({ setIsModifyUsername }) {
	const user = useSelector((state) => state.userReducer)
	const [editUsername, setEditUsername] = useState(user.userName)
	const dispatch = useDispatch()

	const errorHandling = (error) => {
		if (error.message === SET_NAME_USER) {
			dispatch(addError(error.cause.message, error.cause.title))
		}
	}

	const modifyUsername = (evt) => {
		evt.preventDefault()
		const username = editUsername

		dispatch(setNameUser(user.token, username))
			.catch(errorHandling)
			.finally(() => {
				setIsModifyUsername(false)
			})
	}

	return (
		<form
			className="ARGENTBANK-ModifyUsername"
			onSubmit={(e) => modifyUsername(e)}
			autoComplete="off"
		>
			<div className="ARGENTBANK-ModifyUsername-input-wrapper">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					name="username"
					autoFocus={true}
					onChange={(e) => setEditUsername(e.target.value)}
					defaultValue={user.userName}
					autoComplete="new-password"
					required
				/>
			</div>
			<Button title="Send" />
		</form>
	)
}

export default ModifyUsername
