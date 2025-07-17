import ProjectDetail from '../components/ProjectDetail'

const EcommercePage = () => {
  const projectData = {
    projectTitle: "E-Commerce Platform",
    projectImage: "https://via.placeholder.com/500x400/667eea/ffffff?text=E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    description: "A full-stack e-commerce solution featuring modern design, secure payments, and intuitive user experience. Built with React frontend and Node.js backend, this platform provides a seamless shopping experience for both customers and administrators.",
    features: [
      "User authentication and authorization system",
      "Product catalog with advanced filtering and search",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe integration",
      "Admin dashboard for inventory management",
      "Order tracking and management system",
      "Responsive design for all devices",
      "Real-time notifications and updates"
    ],
    challenges: "The main challenges included implementing secure payment processing, optimizing database queries for large product catalogs, and creating a scalable architecture that could handle high traffic volumes during peak shopping periods.",
    github: "https://github.com/ChefBoStudies/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app"
  }

  return <ProjectDetail {...projectData} />
}

export default EcommercePage 