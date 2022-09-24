import './client/assets/styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PageRoutes } from './DomRoutes'
import LandingPage from './LandingPage.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {PageRoutes.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.page />}
              key={route.path}
            ></Route>
          )
        })}
        <Route path="*" element={<LandingPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
