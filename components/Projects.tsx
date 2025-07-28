"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagicBento, MagicBentoCard } from "@/components/ui/magic-bento";
import SpotlightCard from "@/components/ui/spotlight-card";
import FadeContent from "@/components/ui/fade-content";
import { DarkVeil } from "@/components/ui/dark-veil";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ExternalLink,
  Github,
  Code2,
  Palette,
  Smartphone,
  Globe,
  Star,
  FolderOpen,
} from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring user authentication, shopping cart, payment integration, and admin dashboard with real-time analytics.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "Stripe",
        "PostgreSQL",
      ],
      liveUrl: "https://example-ecommerce.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      category: "Full Stack",
      icon: Smartphone,
      featured: true,
      className: "md:col-span-2",
      glowColor: "blue" as const,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration, and project tracking features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://example-tasks.vercel.app",
      githubUrl: "https://github.com/yourusername/task-management",
      category: "Web App",
      icon: Code2,
      featured: true,
      className: "md:col-span-1",
      glowColor: "purple" as const,
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, detailed weather analytics, and 7-day predictions.",
      technologies: [
        "React",
        "OpenWeather API",
        "Chart.js",
        "CSS3",
        "Geolocation",
      ],
      liveUrl: "https://example-weather.vercel.app",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      category: "Frontend",
      icon: Globe,
      featured: false,
      className: "md:col-span-1",
      glowColor: "green" as const,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing modern design principles, smooth animations, and interactive components built with Next.js and Tailwind CSS.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "TypeScript",
        "Shadcn/ui",
      ],
      liveUrl: "https://yourportfolio.vercel.app",
      githubUrl: "https://github.com/yourusername/portfolio",
      category: "Website",
      icon: Palette,
      featured: false,
      className: "md:col-span-2",
      glowColor: "orange" as const,
    },
  ];

  const categories = [
    "All",
    "Featured",
    "Full Stack",
    "Frontend",
    "Web App",
    "Website",
    "Mobile",
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return project.featured;
    return project.category === activeFilter;
  });

  return (
    <DarkVeil intensity="medium" pattern="grid">
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <FadeContent direction="up" delay={0.1}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-600 text-white">
                    <FolderOpen className="w-6 h-6" />
                  </AvatarFallback>
                </Avatar>
                <Badge variant="success">Portfolio</Badge>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                A showcase of my recent work and personal projects that
                demonstrate my skills and creativity
              </p>
              <div className="text-sm text-gray-400">
                {filteredProjects.length} project
                {filteredProjects.length !== 1 ? "s" : ""} found
              </div>
            </FadeContent>
          </div>

          {/* Filter Buttons */}
          <FadeContent
            className="flex flex-wrap justify-center gap-2 mb-12"
            delay={0.2}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`rounded-full transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "border-gray-600 text-gray-300 hover:bg-purple-600/20 hover:border-purple-500"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </FadeContent>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <FadeContent delay={0.4}>
              <MagicBento className="max-w-6xl mx-auto">
                {filteredProjects.map((project, index) => (
                  <MagicBentoCard
                    key={index}
                    className={project.className}
                    glowColor="147, 51, 234"
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    particleCount={12}
                  >
                    {/* Project Image */}
                    <div className="h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 relative overflow-hidden border border-gray-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="w-16 h-16 text-gray-500 opacity-50" />
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gray-800/90 text-gray-200 border border-gray-600"
                        >
                          {project.category}
                        </Badge>
                      </div>
                      {project.featured && (
                        <div className="absolute bottom-3 left-3">
                          <Badge className="text-xs bg-yellow-500 text-black border-0">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs border-gray-600 text-gray-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs border-gray-600 text-gray-300"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-purple-600 hover:bg-purple-700"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </MagicBentoCard>
                ))}
              </MagicBento>
            </FadeContent>
          ) : (
            <FadeContent className="text-center py-12" delay={0.4}>
              <div className="text-gray-500 mb-4">
                <Code2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-400 mb-4">
                Try selecting a different category to see more projects.
              </p>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
                onClick={() => setActiveFilter("All")}
              >
                Show All Projects
              </Button>
            </FadeContent>
          )}

          {/* Call to Action */}
          <FadeContent className="text-center mt-16" delay={0.6}>
            <SpotlightCard className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Want to see more projects?
                </h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Check out my GitHub for more projects, open source
                  contributions, and code snippets!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
                    onClick={() => window.open("https://github.com", "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Visit GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </SpotlightCard>
          </FadeContent>
        </div>
      </section>
    </DarkVeil>
  );
}
