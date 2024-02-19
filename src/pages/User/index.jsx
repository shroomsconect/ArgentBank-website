import { useSelector } from 'react-redux'

import Account from '../../components/Account'
import Button from '../../components/Button'

import { isEmptyData } from '../../utils'

import './index.scss'

function User() {
	const user = useSelector((state) => state.userReducer)
	const userFullName = !isEmptyData(user.firstName)
		? `${user.firstName} ${user.lastName} !`
		: '...'

	const accountList = [
		{
			id: 'x001',
			title: 'Argent Bank Checking (x8349)',
			amount: '$2,082.79',
			description: 'Available Balance',
		},
		{
			id: 'x002',
			title: 'Argent Bank Savings (x6712)',
			amount: '$10,928.42',
			description: 'Available Balance',
		},
		{
			id: 'x003',
			title: 'Argent Bank Credit Card (x8349)',
			amount: '$184.30',
			description: 'Current Balance',
		},
	]

	return (
		<main className="ARGENTBANK-User main-bg-dark">
			<div className="ARGENTBANK-User-header">
				<h2>
					Welcome back
					<br />
					{userFullName}
				</h2>
				<Button
					title="Edit Name"
					className="ARGENTBANK-User-edit-button"
					isEdit={true}
				/>
			</div>
			<h2 className="sr-only">Accounts</h2>
			{accountList.map((account) => (
				<Account
					key={account.id}
					title={account.title}
					amount={account.amount}
					description={account.description}
				/>
			))}
		</main>
	)
}

export default User
