import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteError } from '../../actions/error.action'

import { isEmptyData } from '../../utils'

import './index.scss'

function Error() {
	const { errorList } = useSelector((state) => state.errorReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		const errorContainer = document.querySelector('.ARGENTBANK-Error')
		if (!isEmptyData(errorList))
			errorContainer.classList.add('ARGENTBANK-Error-show')
		else errorContainer.classList.remove('ARGENTBANK-Error-show')
	}, [errorList])

	return (
		<div className="ARGENTBANK-Error">
			<span
				className="ARGENTBANK-Error-delete"
				onClick={() => dispatch(deleteError())}
			>
				Delete
			</span>
			<p className="ARGENTBANK-Error-title">Error(s) reported</p>
			<div className="ARGENTBANK-Error-message-container">
				{errorList.map((error) => (
					<p
						key={error.id}
						className="ARGENTBANK-Error-message"
					>{`${error.title} => ${error.message}`}</p>
				))}
			</div>
		</div>
	)
}

export default Error
