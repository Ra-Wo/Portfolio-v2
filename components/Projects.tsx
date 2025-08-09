"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FadeContent from "@/components/ui/fade-content";
import { Spotlight } from "@/components/ui/spotlight";
import StarBorder from "@/components/ui/star-border";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { client, urlFor, projectsQuery, type Project } from "@/lib/sanity";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Helper function to safely get image URL
  const getImageUrl = (image: Project["image"]): string | null => {
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
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // mockProjects is defined outside component, so it's stable

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
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-heading tracking-tight leading-tight bg-gradient-to-r from-violet-600 via-purple-300 to-violet-600 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and projects, built with modern
              technologies and following industry best practices.
            </p>
          </div>
        </FadeContent>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.slice(0, 9).map((project, index) => (
            <FadeContent
              key={project._id}
              direction="up"
              delay={0.2 + index * 0.1}
            >
              <Link href={`/projects/${project.slug.current}`}>
                <Card className="group h-full overflow-hidden bg-card/30 border-violet-500/20 hover:bg-card/50 hover:border-violet-400/40 transition-all duration-300 cursor-pointer hover:-translate-y-2">
                  <div className="relative">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      {(() => {
                        const imageUrl = getImageUrl(project.image);
                        return imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={project.image?.alt || project.title}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-violet-900/50 to-purple-900/50 flex items-center justify-center">
                            <div className="text-center text-violet-300">
                              <div className="text-4xl mb-2">🚀</div>
                              <p className="text-xs opacity-70">
                                Project Preview
                              </p>
                            </div>
                          </div>
                        );
                      })()}
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="space-y-4">
                        {/* Title and Description */}
                        <div>
                          <h3 className="!text-2xl font-bold text-foreground font-heading mb-2 tracking-tight group-hover:text-violet-300 transition-colors duration-200">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-violet-500/10 text-violet-300 border-violet-500/20"
                            >
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Project Links */}
                        <div className="flex gap-2 pt-2">
                          {project.liveUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-violet-500/30 text-violet-300 hover:bg-violet-500/10 text-xs h-8"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1.5"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 border-violet-500/30 text-violet-300 hover:bg-violet-500/10 text-xs h-8"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1.5"
                              >
                                <Github className="w-3 h-3" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeContent>
          ))}
        </div>

        {/* See All Projects Section */}
        <FadeContent direction="up" delay={0.5}>
          <div className="text-center mt-16">
            <StarBorder
              as={Link}
              href="/projects"
              color="rgb(139, 92, 246)"
              speed="4s"
              className="inline-block"
            >
              See All Projects
            </StarBorder>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
