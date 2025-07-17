import { Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import ArpeggioPage from './pages/ArpeggioPage'
import TaskManagerPage from './pages/TaskManagerPage'
import WeatherDashboardPage from './pages/WeatherDashboardPage'
import SocialDashboardPage from './pages/SocialDashboardPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/arpeggio" element={<ArpeggioPage />} />
      <Route path="/projects/task-manager" element={<TaskManagerPage />} />
      <Route path="/projects/weather-dashboard" element={<WeatherDashboardPage />} />
      <Route path="/projects/social-dashboard" element={<SocialDashboardPage />} />
    </Routes>
  )
}

export default App
