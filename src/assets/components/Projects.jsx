import { useNavigate } from 'react-router-dom';
import CardSwap, { Card } from './CardSwap';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 1,
      title: "ARpeggio",
      subtitle: "AR Piano Learning",
      icon: "🎹",
      gradient: "linear-gradient(135deg, #758073 0%, #5a6d58 100%)",
      technologies: ["Swift", "ARKit", "Firebase"],
      link: "/projects/arpeggio"
    },
    {
      id: 2,
      title: "TaskFlow",
      subtitle: "Management System",
      icon: "📋",
      gradient: "linear-gradient(135deg, #8b9586 0%, #758073 100%)",
      technologies: ["React", "TypeScript", "Firebase"],
      link: "/projects/task-manager"
    },
    {
      id: 3,
      title: "WeatherLive",
      subtitle: "Dashboard Analytics",
      icon: "🌤️",
      gradient: "linear-gradient(135deg, #a0a896 0%, #8b9586 100%)",
      technologies: ["React", "Chart.js", "API"],
      link: "/projects/weather-dashboard"
    },
    {
      id: 4,
      title: "SocialPulse",
      subtitle: "Media Dashboard",
      icon: "📊",
      gradient: "linear-gradient(135deg, #6d7a6b 0%, #5a6d58 100%)",
      technologies: ["React", "D3.js", "Node.js"],
      link: "/projects/social-dashboard"
    }
  ];

  const handleCardClick = (index) => {
    console.log(`Navigating to project: ${projects[index].title}`);
    navigate(projects[index].link);
  };

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-content">
          <div className="projects-left">
            <h2 className="projects-title">My Projects</h2>
            <p className="projects-subtitle">
              A collection of my recent work showcasing various technologies and creative solutions. Click on any card to view project details.
            </p>
          </div>

          <div className="projects-right">
            <div style={{ top: '250px', left: '200px', position: 'relative' }}>
              <CardSwap
                width={500}
                height={400}
                cardDistance={80}
                verticalDistance={90}
                delay={3000}
                pauseOnHover={true}
                onCardClick={handleCardClick}
              >
                {projects.map((project, index) => (
                  <Card key={project.id}>
                    <div className="card-content" style={{ background: project.gradient }}>
                      <div className="card-inner">
                        <div className="card-header">
                          <div className="card-icon">{project.icon}</div>
                          <div className="card-number">0{project.id}</div>
                        </div>
                        
                        <div className="card-body">
                          <h3 className="card-title">{project.title}</h3>
                          <p className="card-subtitle">{project.subtitle}</p>
                        </div>
                        
                        <div className="card-footer">
                          <div className="card-tech">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-badge">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="card-overlay">
                          <span className="click-hint">Click to explore</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 