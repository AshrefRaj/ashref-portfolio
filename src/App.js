import './client/assets/styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PageRoutes } from './DomRoutes'
import LandingPage from './LandingPage'
import NavBar from './client/components/navBar'

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<LandingPage />}></Route>
				{PageRoutes.map((route) => {
					return (
						<Route
							path={route.path}
							element={<route.page />}
							key={route.path}
						></Route>
					)
				})}
				<Route path='*' element={<LandingPage />}></Route>
			</Routes>
		</Router>
	)
}

export default App
