import PropTypes from 'prop-types'

import './index.scss'

function Button({ title, isEdit, isTransaction, isDisabled }) {
	function getClass() {
		if (isEdit) {
			return 'ARGENTBANK-Button-edit-button'
		} else if (isTransaction) {
			return 'ARGENTBANK-Button-transaction'
		} else {
			return 'ARGENTBANK-Button'
		}
	}

	return (
		<button className={getClass()} disabled={isDisabled}>
			{title}
		</button>
	)
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	isEdit: PropTypes.bool.isRequired,
	isTransaction: PropTypes.bool.isRequired,
	isDisabled: PropTypes.bool.isRequired,
}

Button.defaultProps = {
	isEdit: false,
	isTransaction: false,
	isDisabled: false,
}

export default Button
