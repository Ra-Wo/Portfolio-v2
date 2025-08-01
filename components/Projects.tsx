"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FadeContent from "@/components/ui/fade-content";
import { Spotlight } from "@/components/ui/spotlight";
import { TextTrail } from "@/components/ui/text-trail";
import ProjectImage from "@/components/ui/project-image";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { client, urlFor, projectsQuery, type Project } from "@/lib/sanity";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Helper function to safely get image URL
  const getImageUrl = (image: any) => {
    try {
      if (image?.asset?._ref && !image.asset._ref.startsWith("mock-image")) {
        return urlFor(image).width(600).height(400).url();
      }
      return null;
    } catch (err) {
      console.error("Error generating image URL:", err);
      return null;
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(projectsQuery);
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects");
        // Fallback to mock data for development
        setProjects(mockProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Mock data for development when Sanity is not configured
  const mockProjects: Project[] = [
    {
      _id: "1",
      title: "E-Commerce Platform",
      slug: { current: "ecommerce-platform" },
      description:
        "A full-stack e-commerce platform built with Next.js and NestJS, featuring user authentication, payment processing, and admin dashboard.",
      content: [],
      image: {
        asset: { _ref: "mock-image-1" },
        alt: "E-Commerce Platform",
      },
      gallery: [],
      technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Stripe"],
      category: "web-app",
      status: "completed",
      duration: "3 months",
      teamSize: "Solo project",
      challenges: [
        "Implementing secure payment processing",
        "Building scalable user authentication",
        "Optimizing database performance",
      ],
      solutions: [
        "Integrated Stripe for secure payments",
        "Used JWT with refresh tokens",
        "Implemented database indexing and caching",
      ],
      learnings: [
        "Advanced TypeScript patterns",
        "Microservices architecture",
        "Payment gateway integration",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: true,
      order: 1,
    },
    {
      _id: "2",
      title: "Task Management App",
      slug: { current: "task-management" },
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      content: [],
      image: {
        asset: { _ref: "mock-image-2" },
        alt: "Task Management App",
      },
      gallery: [],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "web-app",
      status: "completed",
      duration: "2 months",
      teamSize: "3 developers",
      challenges: [
        "Real-time synchronization across multiple users",
        "Complex drag-and-drop interactions",
        "Performance optimization for large datasets",
      ],
      solutions: [
        "WebSocket implementation with Socket.io",
        "React Beautiful DnD library",
        "Virtual scrolling and pagination",
      ],
      learnings: [
        "Real-time application architecture",
        "Complex state management",
        "Team collaboration workflows",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: true,
      order: 2,
    },
    {
      _id: "3",
      title: "Weather Dashboard",
      slug: { current: "weather-dashboard" },
      description:
        "A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
      content: [],
      image: {
        asset: { _ref: "mock-image-3" },
        alt: "Weather Dashboard",
      },
      gallery: [],
      technologies: ["Vue.js", "Express.js", "Chart.js", "OpenWeather API"],
      category: "web-app",
      status: "completed",
      duration: "6 weeks",
      teamSize: "Solo project",
      challenges: [
        "Handling multiple API integrations",
        "Creating responsive data visualizations",
        "Geolocation and mapping features",
      ],
      solutions: [
        "API abstraction layer with error handling",
        "Chart.js with custom responsive configurations",
        "Integration with browser geolocation API",
      ],
      learnings: [
        "Vue.js ecosystem and composition API",
        "Data visualization best practices",
        "API design and integration patterns",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: false,
      order: 3,
    },
  ];

  if (loading) {
    return (
      <section id="projects" className="min-h-screen relative py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-20">
          <div className="flex items-center justify-center min-h-[50vh]">
            <Loader2 className="w-8 h-8 animate-spin text-violet-400" />
          </div>
        </div>
      </section>
    );
  }

  if (error && projects.length === 0) {
    return (
      <section id="projects" className="min-h-screen relative py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-20">
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-red-400">Error loading projects: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="min-h-screen relative py-20 bg-black overflow-hidden"
    >
      <Spotlight
        className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen z-10"
        fill="purple"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw] z-10"
        fill="blue"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-20">
        {/* Section Header */}
        <FadeContent direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 bg-violet-500/10 border-violet-500/20 text-violet-300"
            >
              Featured Work
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-heading tracking-tight leading-tight">
              <TextTrail
                delay={0.2}
                stagger={0.1}
                className="bg-gradient-to-r from-violet-600 via-purple-300 to-violet-600 bg-clip-text text-transparent"
              >
                My Projects
              </TextTrail>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring full-stack applications
              built with modern technologies and best practices.
            </p>
          </div>
        </FadeContent>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <FadeContent
              key={project._id}
              direction="up"
              delay={0.2 + index * 0.1}
            >
              <Card className="group overflow-hidden bg-card/30 border-violet-500/20 hover:bg-card/50 transition-all duration-300">
                <div
                  className={`grid ${index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"} gap-0`}
                >
                  {/* Project Image */}
                  <div
                    className={`relative overflow-hidden ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                  >
                    <div className="relative bg-black/10 p-4 lg:p-6">
                      <div className="relative aspect-video bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-lg overflow-hidden">
                        {(() => {
                          const imageUrl = getImageUrl(project.image);
                          return imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={project.image?.alt || project.title}
                              fill
                              unoptimized
                              className="object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-violet-900/50 to-purple-900/50 flex items-center justify-center rounded-lg">
                              <div className="text-center text-violet-300">
                                <div className="text-6xl lg:text-7xl mb-4">
                                  🚀
                                </div>
                                <p className="text-sm lg:text-base opacity-70">
                                  Project Preview
                                </p>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-heading mb-3 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-3 pt-4 flex-wrap">
                        <Button
                          asChild
                          variant="default"
                          size="sm"
                          className="bg-violet-600 hover:bg-violet-700 text-white"
                        >
                          <Link href={`/projects/${project.slug.current}`}>
                            View Details
                          </Link>
                        </Button>
                        {project.liveUrl && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-violet-500/30 text-violet-300 hover:bg-violet-500/10"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-violet-500/30 text-violet-300 hover:bg-violet-500/10"
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              Source
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeContent>
          ))}
        </div>

        {/* CTA Section */}
        <FadeContent direction="up" delay={0.5}>
          <div className="text-center mt-16">
            <Card className="p-8 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-violet-500/5 border-violet-500/20">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                Interested in Working Together?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and exciting
                projects. Let's create something amazing together!
              </p>
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white"
              >
                Get In Touch
              </Button>
            </Card>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
