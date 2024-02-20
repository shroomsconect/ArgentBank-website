import { useEffect, useState } from 'react'
import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logoutUser } from '../../actions/user.action'

import { isEmptyData } from '../../utils'
import WhetherConnected from '../../utils/WhetherConnected'
import WhetherNotConnected from '../../utils/WhetherNotConnected'
import WhetherOrNotConnected from '../../utils/WhetherOrNotConnected'

import Header from '../Header'
import Footer from '../Footer'

import Error404 from '../Error/404'

import Home from '../../pages/Home'
import SignIn from '../../pages/SignIn'
import User from '../../pages/User'

const setTitlePage = (title) => (document.title = 'Argent Bank - ' + title)

const Layout = () => (
	<>
		<Header />
		<Outlet />
		<Footer />
	</>
)

const SignOut = () => {
	const [isNotConnected, setIsNotConnected] = useState(false)
	const user = useSelector((state) => state.userReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(logoutUser())
		const token = localStorage.getItem('token')

		if (isEmptyData(user)) {
			if (!token) {
				setIsNotConnected(true)
			}
		}
		// eslint-disable-next-line
	}, [user])

	if (isNotConnected) {
		return <Navigate to="/" replace />
	}

	return null
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: (
					<WhetherOrNotConnected>
						<Home />
					</WhetherOrNotConnected>
				),
				loader: () => setTitlePage('Home Page'),
			},
			{
				path: '/sign-in',
				element: (
					<WhetherNotConnected elseRedirectTo="/user">
						<SignIn />
					</WhetherNotConnected>
				),
				loader: () => setTitlePage('Sign In'),
			},
			{
				path: '/user',
				element: (
					<WhetherConnected elseRedirectTo="/sign-in">
						<User />
					</WhetherConnected>
				),
				loader: () => setTitlePage('User'),
			},
			{
				path: '*',
				element: (
					<WhetherOrNotConnected>
						<Error404 />
					</WhetherOrNotConnected>
				),
				loader: () => setTitlePage('Error 404'),
			},
		],
	},
	{
		path: '/sign-out',
		element: <SignOut />,
	},
])

export default router
