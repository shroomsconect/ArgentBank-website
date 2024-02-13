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
					<p className="ARGENTBANK-Hero-content-subtitle">
						{subtitle}
					</p>
				))}
				<p className="ARGENTBANK-Hero-content-text">{text}</p>
			</section>
		</div>
	)
}

export default Hero
