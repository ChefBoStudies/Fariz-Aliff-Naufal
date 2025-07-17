import ProjectDetail from '../components/ProjectDetail'

const ArpeggioPage = () => {
  const projectData = {
    projectTitle: "ARpeggio - AR Piano Learning App",
    projectImage: "https://patndglssilslamhahhn.supabase.co/storage/v1/object/public/project-assets//projects-ARpeggio.png",
    technologies: ["Swift", "SwiftUI", "ARKit", "RealityKit", "React.js", "Node.js", "Firebase", "Tailwind CSS"],
    description: "ARpeggio is an innovative augmented reality (AR)-guided piano learning application designed specifically for beginners. This dual-platform solution combines an iOS AR mobile application with a web-based content management system, addressing common barriers in traditional piano education such as high costs, lack of flexibility, and complex learning curves.",
    features: [
      "Real-time AR visual note guidance and overlays",
      "Precise AR calibration system for piano keys",
      "Interactive note animation and visualization",
      "Customizable tempo controls and self-paced learning",
      "Song progression system with difficulty levels",
      "Web-based content management system",
      "Firebase integration for real-time synchronization",
      "User authentication and profile management",
      "Comprehensive song library administration",
      "Cross-platform data synchronization"
    ],
    challenges: "The primary technical challenges included implementing precise AR tracking for different piano models, developing real-time note overlay systems that accurately align with physical piano keys, creating seamless integration between the mobile AR app and web admin platform, and ensuring consistent performance across various iOS devices with different AR capabilities.",
    github: "https://github.com/ChefBoStudies/ARpeggio",
    demo: null, // Will be handled by video demo
    videoUrl: "https://patndglssilslamhahhn.supabase.co/storage/v1/object/public/project-assets//FxDemo.mp4"
  }

  return <ProjectDetail {...projectData} />
}

export default ArpeggioPage 