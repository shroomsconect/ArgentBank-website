import { createBrowserRouter, Outlet } from 'react-router-dom'

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

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => setTitlePage('Home Page'),
			},
			{
				path: '/sign-in',
				element: <SignIn />,
				loader: () => setTitlePage('Sign In'),
			},
			{
				path: '/user',
				element: <User />,
				loader: () => setTitlePage('User'),
			},
			{
				path: '*',
				element: <Error404 />,
				loader: () => setTitlePage('Error 404'),
			},
		],
	},
])

export default router
