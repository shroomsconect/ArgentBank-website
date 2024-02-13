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

export default Feature
