import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { client, projectsQuery, urlFor, type Project } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Projects | Rachid's Portfolio",
  description: "Browse all projects in Rachid's portfolio",
};

export default async function ProjectsPage() {
  let projects: Project[] = [];

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

  console.log("Fetching projects...");

  try {
    projects = await client.fetch(projectsQuery);
    console.log("Fetched projects:", projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black py-20" suppressHydrationWarning>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-400 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="!text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading tracking-tight leading-tight bg-gradient-to-r from-violet-600 via-purple-300 to-violet-600 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="!text-lg text-gray-300 max-w-3xl leading-relaxed">
            A complete showcase of my work, featuring full-stack applications
            built with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug.current}`}
              className="group block"
            >
              <div className="bg-card/30 border border-violet-500/20 rounded-lg overflow-hidden hover:bg-card/50 transition-all duration-300 hover:border-violet-500/40 hover:scale-105">
                <div className="aspect-[4/3] relative overflow-hidden">
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
                          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                            🚀
                          </div>
                          <p className="text-sm font-medium">{project.title}</p>
                          <p className="text-xs opacity-70 mt-1">
                            Project Preview
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {project.category && project.category !== "" && (
                      <Badge
                        variant="outline"
                        className="bg-violet-500/10 border-violet-500/20 text-violet-300 text-xs"
                      >
                        {project.category.replace("-", " ").toUpperCase()}
                      </Badge>
                    )}
                    {project.featured === true && (
                      <Badge
                        variant="outline"
                        className="bg-yellow-500/10 border-yellow-500/20 text-yellow-300 text-xs"
                      >
                        FEATURED
                      </Badge>
                    )}
                  </div>

                  <h3 className="!text-2xl font-bold text-foreground mb-2 group-hover:text-violet-300 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge
                        key={`${project._id}-tech-${index}`}
                        variant="secondary"
                        className="bg-violet-500/10 text-violet-300 border-violet-500/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="bg-gray-500/10 text-gray-400 border-gray-500/20 text-xs"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
            Interested in Working Together?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I{"'"}m always open to discussing new opportunities and exciting
            projects.
          </p>
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white"
          >
            <Link href="/#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
