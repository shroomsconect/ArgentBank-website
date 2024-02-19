import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { loginUser, LOGIN_USER } from '../../actions/user.action'
import { addError } from '../../actions/error.action'

import Button from '../Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

function ModalSignIn() {
	const [sending, setSending] = useState(false)
	const dispatch = useDispatch()

	const errorHandling = (error) => {
		if (error.message === LOGIN_USER) {
			dispatch(addError(error.cause.message, error.cause.title))
		}
	}

	const signIn = (evt) => {
		evt.preventDefault()
		if (!sending) {
			setSending(true)

			const formData = new FormData(evt.target)

			const email = formData.get('email')
			const password = formData.get('password')
			const remember = formData.get('remember-me')

			if (remember) {
				dispatch(loginUser(email, password, true))
					.catch(errorHandling)
					.finally(() => {
						setSending(false)
					})
			} else {
				dispatch(loginUser(email, password))
					.catch(errorHandling)
					.finally(() => {
						setSending(false)
					})
			}
		}
	}

	return (
		<section className="ARGENTBANK-ModalSignIn">
			<FontAwesomeIcon
				icon={faCircleUser}
				className="ARGENTBANK-ModalSignIn-icon"
			/>
			<h1>Sign In</h1>
			<form onSubmit={signIn}>
				<div className="ARGENTBANK-ModalSignIn-input-wrapper">
					<label htmlFor="email">Email</label>
					<input type="text" id="email" name="email" required />
				</div>
				<div className="ARGENTBANK-ModalSignIn-input-wrapper">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						required
					/>
				</div>
				<div className="ARGENTBANK-ModalSignIn-input-remember">
					<input
						type="checkbox"
						id="remember-me"
						name="remember-me"
					/>
					<label htmlFor="remember-me">Remember me</label>
				</div>
				<Button title="Sign In" isDisabled={sending} />
			</form>
		</section>
	)
}

export default ModalSignIn
