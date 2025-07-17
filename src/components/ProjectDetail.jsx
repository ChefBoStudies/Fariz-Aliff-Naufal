import { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoModal from './VideoModal'
import './ProjectDetail.css'

const ProjectDetail = ({ 
  projectTitle, 
  projectImage, 
  technologies, 
  description, 
  features, 
  challenges,
  github,
  demo,
  videoUrl 
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ChefBoStudies', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/fariz-aliff', icon: '💼' },
    { name: 'Email', url: 'mailto:fariz@example.com', icon: '📧' },
    { name: 'Portfolio', url: '/', icon: '🌐' }
  ]

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        {/* Left Sidebar - Sticky */}
        <div className="project-sidebar">
          <div className="sidebar-content">
            {/* Back to Home */}
            <Link to="/" className="back-home">
              ← Back to Portfolio
            </Link>
            
            {/* Social Links */}
            <div className="social-section">
              <h3>Connect</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Project Image */}
            <div className="project-image-container">
              <img src={projectImage} alt={projectTitle} className="project-image" />
            </div>

            {/* Quick Links */}
            <div className="quick-links">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="quick-link">
                  View Code
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="quick-link">
                  Live Demo
                </a>
              )}
              {videoUrl && (
                <button 
                  onClick={() => setIsVideoModalOpen(true)} 
                  className="quick-link video-demo-btn"
                >
                  Watch Demo
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="project-content">
          <header className="project-header">
            <h1 className="project-title">{projectTitle}</h1>
            <div className="tech-stack">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </header>

          <section className="project-section">
            <h2>Project Overview</h2>
            <p className="project-description">{description}</p>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h2>Technical Challenges</h2>
            <p className="challenges-text">{challenges}</p>
          </section>

          <section className="project-section">
            <h2>Technologies Used</h2>
            <div className="detailed-tech">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-detail">
                  <h4>{tech}</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              ))}
            </div>
          </section>

          <section className="project-section">
            <h2>Development Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <h4>1. Planning & Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="process-step">
                <h4>2. Development</h4>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="process-step">
                <h4>3. Testing & Deployment</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h2>Results & Impact</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          </section>
        </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
        projectTitle={projectTitle}
      />
    </div>
  )
}

export default ProjectDetail 