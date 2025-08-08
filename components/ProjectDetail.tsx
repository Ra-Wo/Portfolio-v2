"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/ui/fade-content";
import RichText from "@/components/ui/rich-text";
import { Spotlight } from "@/components/ui/spotlight";
import { TextTrail } from "@/components/ui/text-trail";
import { urlFor, type Project } from "@/lib/sanity";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Github,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface ProjectDetailProps {
  project: Project;
}

// Type for Sanity image objects
interface SanityImageAsset {
  _ref: string;
  _type: string;
}

interface SanityImage {
  asset?: SanityImageAsset;
  alt?: string;
  caption?: string;
  _type?: string;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Helper function to safely get image URL
  const getImageUrl = (
    image: SanityImage | unknown,
    width = 800,
    height = 600
  ): string | null => {
    try {
      const sanityImage = image as SanityImage;
      if (
        sanityImage?.asset?._ref &&
        !sanityImage.asset._ref.startsWith("mock-image")
      ) {
        return urlFor(sanityImage).width(width).height(height).url();
      }
      return null;
    } catch (err) {
      console.error("Error generating image URL:", err);
      return null;
    }
  };

  const galleryImages = project.gallery || [];
  const allImages = project.image
    ? [project.image, ...galleryImages]
    : galleryImages;

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  }, [allImages.length]);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (allImages.length > 1) {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          prevImage();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          nextImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [allImages.length, nextImage, prevImage]);

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-300 border-green-500/20";
      case "in-progress":
        return "bg-blue-500/10 text-blue-300 border-blue-500/20";
      case "planned":
        return "bg-yellow-500/10 text-yellow-300 border-yellow-500/20";
      case "archived":
        return "bg-gray-500/10 text-gray-300 border-gray-500/20";
      default:
        return "bg-violet-500/10 text-violet-300 border-violet-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Spotlight
        className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen z-10"
        fill="purple"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw] z-10"
        fill="blue"
      />

      <div className="relative z-20">
        {/* Header Navigation */}
        <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-violet-500/20">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-4 flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-400 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            <Link
              href="/projects"
              className="text-violet-300 hover:text-violet-400 transition-colors duration-200 text-sm"
            >
              View All Projects
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-4">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            <FadeContent direction="up" delay={0.1}>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                  {project.category && (
                    <Badge
                      variant="outline"
                      className="bg-violet-500/10 border-violet-500/20 text-violet-300"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {project.category.replace("-", " ").toUpperCase()}
                    </Badge>
                  )}
                  {project.status && (
                    <Badge
                      variant="outline"
                      className={getStatusColor(project.status)}
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {project.status.replace("-", " ").toUpperCase()}
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-heading tracking-tight leading-tight">
                  <TextTrail
                    delay={0.2}
                    stagger={0.1}
                    className="bg-gradient-to-r from-violet-600 via-purple-300 to-violet-600 bg-clip-text text-transparent"
                  >
                    {project.title}
                  </TextTrail>
                </h1>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Project Links */}
                <div className="flex justify-center gap-4 flex-wrap">
                  {project.liveUrl && (
                    <Button
                      asChild
                      size="lg"
                      className="bg-violet-600 hover:bg-violet-700 text-white"
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
                      size="lg"
                      className="border-violet-500/30 text-violet-300 hover:bg-violet-500/10"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </FadeContent>

            {/* Main Project Image/Gallery */}
            {allImages.length > 0 && (
              <FadeContent direction="up" delay={0.3}>
                <div className="mb-1">
                  {/* Main Image Display */}
                  <div className="relative bg-black rounded-lg overflow-hidden">
                    {(() => {
                      const currentImage = allImages[currentImageIndex];
                      const imageUrl = getImageUrl(currentImage, 1200, 500);
                      return imageUrl ? (
                        <div className="relative">
                          <Image
                            src={imageUrl}
                            alt={currentImage?.alt || project.title}
                            width={1200}
                            height={500}
                            unoptimized
                            className="w-full h-auto object-contain"
                            priority={true}
                            style={{ maxHeight: "600px" }}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-96 bg-gray-800 rounded-lg">
                          <div className="text-center text-gray-400">
                            <div className="text-6xl mb-4">�</div>
                            <h3 className="text-xl font-medium mb-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-500">No image available</p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </FadeContent>
            )}

            {/* Technologies Section */}
            <FadeContent
              direction="up"
              delay={0.35}
              useInViewMargin="0px 0px 30% 0px"
            >
              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 transition-colors duration-200 text-sm px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </FadeContent>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 pt-4">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            {/* Single Column Layout */}
            <div className="space-y-8">
              {/* Project Content */}
              {project.content && project.content.length > 0 ? (
                <FadeContent direction="up" delay={0.4}>
                  <Card className="p-6 bg-card/30 border-violet-500/20">
                    <RichText value={project.content} />
                  </Card>
                </FadeContent>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
