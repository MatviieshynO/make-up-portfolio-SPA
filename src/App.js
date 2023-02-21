//importPages
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PricesPage from './pages/PricesPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
//components

//templates
import PagesTemplate from './template/PagesTemplate'
//anotherModules
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PagesTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
