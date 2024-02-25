import Hero from '../../components/Hero'
import bgImg from '../../assets/bank-tree.webp'

import Feature from '../../components/Feature'
import iconChat from '../../assets/icon-chat.webp'
import iconMoney from '../../assets/icon-money.webp'
import iconSecurity from '../../assets/icon-security.webp'

import './index.scss'

function Home() {
	const heroSubtitleList = [
		'No fees.',
		'No minimum deposit.',
		'High interest rates.',
	]

	return (
		<main className="ARGENTBANK-Home">
			<Hero
				title="Promoted Content"
				subtitleList={heroSubtitleList}
				text="Open a savings account with Argent Bank today!"
				bgImg={bgImg}
			/>
			<section className="ARGENTBANK-Home-features">
				<h2 className="sr-only">Features</h2>
				<Feature
					icon={iconChat}
					iconAlt="Chat Icon"
					title="You are our #1 priority"
					description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
				/>
				<Feature
					icon={iconMoney}
					iconAlt="Money Icon"
					title="More savings means higher rates"
					description="The more you save with us, the higher your interest rate will be!"
				/>
				<Feature
					icon={iconSecurity}
					iconAlt="Security Icon"
					title="Security you can trust"
					description="We use top of the line encryption to make sure your data and money is always safe."
				/>
			</section>
		</main>
	)
}

export default Home
