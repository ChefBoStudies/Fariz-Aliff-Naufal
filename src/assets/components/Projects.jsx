import CardSwap, { Card } from './CardSwap';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "https://via.placeholder.com/500x400/667eea/ffffff?text=E-Commerce",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      image: "https://via.placeholder.com/500x400/f093fb/ffffff?text=Task+Manager",
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: "https://via.placeholder.com/500x400/4ade80/ffffff?text=Weather+App",
      link: "#"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      image: "https://via.placeholder.com/500x400/fb7185/ffffff?text=Social+Dashboard",
      link: "#"
    }
  ];

  const handleCardClick = (index) => {
    console.log(`Clicked on project ${index + 1}`);
    // Later we'll navigate to project detail page
    window.open(projects[index].link, '_blank');
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
                    <div className="card-content">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="card-image"
                      />
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