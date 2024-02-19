import { Link } from 'react-router-dom'

import './index.scss'

function Error404() {
	return (
		<main className="ARGENTBANK-Error404">
			<h1 className="ARGENTBANK-Error404-title">404</h1>
			<p className="ARGENTBANK-Error404-description">
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link to="/" className="ARGENTBANK-Error404-link">
				Retourner sur la page d’accueil
			</Link>
		</main>
	)
}

export default Error404
