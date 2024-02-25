import { Navigate } from 'react-router-dom'

import { useIsConnected } from '../../utils/hooks'

import ModalSignIn from '../../components/ModalSignIn'

import './index.scss'

function SignIn() {
	const isRedirect = useIsConnected('mustBeNotConnected', true, false)
	if (isRedirect) {
		return <Navigate to="/user" replace />
	}

	return (
		<main className="ARGENTBANK-SignIn main-bg-dark">
			<ModalSignIn />
		</main>
	)
}

export default SignIn
