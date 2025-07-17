import ProjectDetail from '../components/ProjectDetail'

const TaskManagerPage = () => {
  const projectData = {
    projectTitle: "Task Management App",
    projectImage: "https://via.placeholder.com/500x400/f093fb/ffffff?text=Task+Manager",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "PWA"],
    description: "A comprehensive task management application designed to boost productivity and streamline workflow organization. Features real-time collaboration, intelligent prioritization, and cross-platform synchronization to help teams and individuals stay organized.",
    features: [
      "Drag-and-drop task organization with Kanban boards",
      "Real-time collaboration and team workspaces",
      "Smart deadline reminders and notifications",
      "Time tracking and productivity analytics",
      "File attachments and comment system",
      "Advanced filtering and search capabilities",
      "Offline functionality with PWA technology",
      "Dark/light theme customization"
    ],
    challenges: "Key challenges involved implementing real-time synchronization across multiple users, creating an intuitive drag-and-drop interface, and ensuring data consistency during offline usage with seamless sync when connectivity returns.",
    github: "https://github.com/ChefBoStudies/task-manager",
    demo: "https://taskmanager-demo.vercel.app"
  }

  return <ProjectDetail {...projectData} />
}

export default TaskManagerPage 