import PropTypes from 'prop-types'

import Button from '../Button'

import './index.scss'

function Account({ title, amount, description }) {
	return (
		<section className="ARGENTBANK-Account">
			<div className="ARGENTBANK-Account-content-wrapper">
				<h3 className="ARGENTBANK-Account-title">{title}</h3>
				<p className="ARGENTBANK-Account-amount">{amount}</p>
				<p className="ARGENTBANK-Account-amount-description">
					{description}
				</p>
			</div>
			<div className="ARGENTBANK-Account-content-wrapper cta">
				<Button
					title="View transactions"
					className="ARGENTBANK-Account-transaction-button"
					isTransaction={true}
				/>
			</div>
		</section>
	)
}

Account.propTypes = {
	title: PropTypes.string.isRequired,
	amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	description: PropTypes.string.isRequired,
}

export default Account
