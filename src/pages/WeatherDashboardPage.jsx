import ProjectDetail from '../components/ProjectDetail'

const WeatherDashboardPage = () => {
  const projectData = {
    projectTitle: "Weather Dashboard",
    projectImage: "https://via.placeholder.com/500x400/4ade80/ffffff?text=Weather+App",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3", "Geolocation"],
    description: "An elegant weather dashboard providing comprehensive meteorological data with beautiful visualizations. Features real-time weather updates, detailed forecasts, and interactive charts to help users make informed decisions about their daily activities.",
    features: [
      "Real-time weather data from multiple global sources",
      "7-day detailed forecast with hourly breakdowns",
      "Interactive weather maps and radar imagery",
      "Location-based automatic weather detection",
      "Customizable dashboard with widget system",
      "Weather alerts and severe weather notifications",
      "Historical weather data and trends",
      "Multiple unit systems (Metric/Imperial)"
    ],
    challenges: "The primary challenges included handling multiple API integrations with different data formats, creating responsive charts that work across devices, and implementing efficient caching to minimize API calls while maintaining data freshness.",
    github: "https://github.com/ChefBoStudies/weather-dashboard",
    demo: "https://weather-dash-demo.vercel.app"
  }

  return <ProjectDetail {...projectData} />
}

export default WeatherDashboardPage 