import ProjectDetail from '../components/ProjectDetail'

const SocialDashboardPage = () => {
  const projectData = {
    projectTitle: "Social Media Dashboard",
    projectImage: "https://via.placeholder.com/500x400/fb7185/ffffff?text=Social+Dashboard",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    description: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms to provide actionable insights. Features advanced data visualization, sentiment analysis, and automated reporting to help businesses optimize their social media strategy.",
    features: [
      "Multi-platform social media integration (Twitter, Instagram, Facebook)",
      "Real-time engagement metrics and analytics",
      "Advanced data visualization with interactive charts",
      "Sentiment analysis and trend detection",
      "Automated report generation and scheduling",
      "Competitive analysis and benchmarking",
      "Custom KPI tracking and goal setting",
      "Team collaboration and role-based access control"
    ],
    challenges: "Major challenges included managing rate limits across different social media APIs, processing large volumes of real-time data efficiently, and creating meaningful visualizations that could handle diverse data types from multiple platforms.",
    github: "https://github.com/ChefBoStudies/social-dashboard",
    demo: "https://social-dash-demo.vercel.app"
  }

  return <ProjectDetail {...projectData} />
}

export default SocialDashboardPage 