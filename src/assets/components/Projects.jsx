import { useEffect, useState } from 'react';
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
      title: "Lensa Kita",
      subtitle: "Wedding Photo Web App",
      icon: "📷",
      gradient: "linear-gradient(135deg, #8b9586 0%, #758073 100%)",
      technologies: ["Vanilla JS", "Supabase", "Vercel"],
      link: "/projects/task-manager"
    },
    {
      id: 3,
      title: "Trading Bot",
      subtitle: "Work in Progress",
      icon: "🌤️",
      gradient: "linear-gradient(135deg, #a0a896 0%, #8b9586 100%)",
      technologies: ["React", "Chart.js", "API"],
      link: "_blank"
    },
    {
      id: 4,
      title: "Freelance Work",
      subtitle: "Work in Progress",
      icon: "📊",
      gradient: "linear-gradient(135deg, #6d7a6b 0%, #5a6d58 100%)",
      technologies: ["React", "D3.js", "Node.js"],
      link: "_blank"
    }
  ];

  const handleCardClick = (index) => {
    const target = projects[index];
    if (!target.link || target.link === "_blank") {
      return;
    }
    console.log(`Navigating to project: ${target.title}`);
    navigate(target.link);
  };

  // Responsive sizing for CardSwap
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const cardWidth = viewportWidth <= 480 ? 300 : viewportWidth <= 768 ? 380 : 500;
  const cardHeight = viewportWidth <= 480 ? 240 : viewportWidth <= 768 ? 300 : 400;
  const cardDistance = viewportWidth <= 480 ? 50 : viewportWidth <= 768 ? 65 : 80;
  const verticalDistance = viewportWidth <= 480 ? 60 : viewportWidth <= 768 ? 75 : 90;

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
            <div className="cards-wrapper">
              <CardSwap
                width={cardWidth}
                height={cardHeight}
                cardDistance={cardDistance}
                verticalDistance={verticalDistance}
                delay={3000}
                pauseOnHover={true}
                onCardClick={handleCardClick}
              >
                {projects.map((project, index) => (
                  <Card key={project.id}>
                    <div className={`card-content${project.link === "_blank" ? ' disabled' : ''}`} style={{ background: project.gradient }} aria-disabled={project.link === "_blank"}
                      role={project.link === "_blank" ? 'button' : undefined}>
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
                          <span className="click-hint">{project.link === "_blank" ? 'Work in progress' : 'Click to explore'}</span>
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