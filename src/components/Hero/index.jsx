import PropTypes from 'prop-types'

import './index.scss'

function Hero({ title, subtitleList, text, bgImg }) {
	return (
		<div
			className="ARGENTBANK-Hero"
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<section className="ARGENTBANK-Hero-content">
				<h2 className="sr-only">{title}</h2>
				{subtitleList.map((subtitle) => (
					<p
						key={subtitle}
						className="ARGENTBANK-Hero-content-subtitle"
					>
						{subtitle}
					</p>
				))}
				<p className="ARGENTBANK-Hero-content-text">{text}</p>
			</section>
		</div>
	)
}

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	subtitleList: PropTypes.arrayOf(PropTypes.string).isRequired,
	text: PropTypes.string.isRequired,
	bgImg: PropTypes.string.isRequired,
}

export default Hero
