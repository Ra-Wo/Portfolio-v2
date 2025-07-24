import ProjectCard from "../ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "MongoDB",
      ],
      githubUrl: "https://github.com/Ra-Wo",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Express"],
      githubUrl: "https://github.com/Ra-Wo",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts and interactive charts.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com/Ra-Wo",
      liveUrl: "https://example.com",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media analytics dashboard with data visualization and reporting features.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/Ra-Wo",
      liveUrl: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Ra-Wo",
      liveUrl: "https://rachid-oudouch.vercel.app",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Ra-Wo",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and showcases different aspects of my development
            skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Ra-Wo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
