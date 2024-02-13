import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/argentBankLogo.webp'

import './index.scss'

function Header() {
	return (
		<header className="ARGENTBANK-Header">
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
					<NavLink
						to="/sign-in"
						className="ARGENTBANK-Header-nav-item"
					>
						<FontAwesomeIcon icon={faCircleUser} />
						&nbsp;Sign In
					</NavLink>
				</div>
			</nav>
		</header>
	)
}

export default Header
