import PropTypes from 'prop-types'

import './index.scss'

function Feature({ icon, iconAlt, title, description }) {
	return (
		<div className="ARGENTBANK-Feature">
			<img src={icon} alt={iconAlt} className="ARGENTBANK-Feature-icon" />
			<h3 className="ARGENTBANK-Feature-title">{title}</h3>
			<p>{description}</p>
		</div>
	)
}

Feature.propTypes = {
	icon: PropTypes.string.isRequired,
	iconAlt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default Feature
