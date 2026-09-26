import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { FavoritesProvider } from './context/FavoritesContext'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import Adopt from './pages/Adopt'
import DogDetails from './pages/DogDetails'
import DogCare from './pages/DogCare'
import Favourites from './pages/Favourites'
import Training from './pages/Training'
import HealthTracker from './pages/HealthTracker'
import VetAppointment from './pages/VetAppointment'
import Reviews from './pages/Reviews'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/adopt" element={<Adopt />} />
              <Route path="/adopt/:id" element={<DogDetails />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/training" element={<Training />} />
              <Route path="/health" element={<HealthTracker />} />
              <Route path="/appointments" element={<VetAppointment />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/care" element={<DogCare />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  )
}
