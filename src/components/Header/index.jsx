import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Error from '../Error'

import { isEmptyData } from '../../utils'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/argentBankLogo.webp'

import './index.scss'

function Header() {
	const user = useSelector((state) => state.userReducer)

	return (
		<header className="ARGENTBANK-Header">
			<Error />
			<nav className="ARGENTBANK-Header-nav">
				<NavLink to="/" className="ARGENTBANK-Header-nav-logo">
					<img
						className="ARGENTBANK-Header-nav-logo-image"
						src={logo}
						alt="Argent Bank Logo"
					/>
					<h1 className="sr-only">Argent Bank</h1>
				</NavLink>
				<div>
					{isEmptyData(user) ? (
						<NavLink
							to="/sign-in"
							className="ARGENTBANK-Header-nav-item"
						>
							<FontAwesomeIcon icon={faCircleUser} />
							&nbsp;Sign In
						</NavLink>
					) : (
						<>
							<NavLink
								to="/user"
								className="ARGENTBANK-Header-nav-item"
							>
								<FontAwesomeIcon icon={faCircleUser} />
								&nbsp;
								{isEmptyData(user.userName)
									? '...'
									: user.userName}
							</NavLink>
							<NavLink
								to="/sign-out"
								className="ARGENTBANK-Header-nav-item"
							>
								<FontAwesomeIcon icon={faSignOut} />
								&nbsp;Sign Out
							</NavLink>
						</>
					)}
				</div>
			</nav>
		</header>
	)
}

export default Header
