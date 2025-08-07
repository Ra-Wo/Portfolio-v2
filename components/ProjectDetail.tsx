"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FadeContent from "@/components/ui/fade-content";
import { Spotlight } from "@/components/ui/spotlight";
import { TextTrail } from "@/components/ui/text-trail";
import RichText from "@/components/ui/rich-text";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Calendar,
  Users,
  Tag,
  CheckCircle,
  Lightbulb,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { urlFor, type Project } from "@/lib/sanity";

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

  // Helper function to safely get image caption
  const getImageCaption = (image: SanityImage | unknown): string | null => {
    const sanityImage = image as SanityImage;
    return sanityImage?.caption || null;
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
        <section className="py-20">
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
                <div className="mb-12">
                  {/* Main Image Display */}
                  <div className="relative mb-6">
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
                              <p className="text-gray-500">
                                No image available
                              </p>
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Simple Navigation Buttons */}
                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-lg transition-colors duration-200"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-lg transition-colors duration-200"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Simple Counter */}
                        <div className="absolute top-4 right-4 bg-gray-900/90 text-white px-3 py-1 rounded text-sm">
                          {currentImageIndex + 1} / {allImages.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Simple Thumbnail Gallery */}
                  {allImages.length > 1 && (
                    <div>
                      <h4 className="text-lg font-medium text-gray-300 mb-3">
                        Gallery
                      </h4>
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {allImages.map((image, index) => {
                          const thumbnailUrl = getImageUrl(image, 150, 100);
                          return (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 border-2 rounded-lg overflow-hidden transition-colors duration-200 ${
                                index === currentImageIndex
                                  ? "border-violet-400"
                                  : "border-gray-600 hover:border-gray-500"
                              }`}
                            >
                              <div className="w-24 h-16 bg-gray-800">
                                {thumbnailUrl ? (
                                  <Image
                                    src={thumbnailUrl}
                                    alt={`Gallery image ${index + 1}`}
                                    width={150}
                                    height={100}
                                    unoptimized
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-gray-500 text-xs">
                                      {index + 1}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Simple Caption */}
                  {(() => {
                    const caption = getImageCaption(
                      allImages[currentImageIndex]
                    );
                    return caption ? (
                      <div className="mt-4">
                        <p className="text-gray-400 text-sm text-center">
                          {caption}
                        </p>
                      </div>
                    ) : null;
                  })()}
                </div>
              </FadeContent>
            )}
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            {/* Single Column Layout */}
            <div className="space-y-8">
              {/* Technologies */}
              <FadeContent direction="up" delay={0.4}>
                <Card className="p-4 bg-card/30 border-violet-500/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3 font-heading">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 transition-colors duration-200 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </FadeContent>

              {/* Project Details & Quick Links Combined */}
              <FadeContent direction="up" delay={0.45}>
                <Card className="p-6 bg-card/30 border-violet-500/20">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Project Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 font-heading">
                        Project Details
                      </h3>
                      <div className="space-y-4">
                        {project.duration && (
                          <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-violet-400" />
                            <div>
                              <p className="text-sm text-gray-400">Duration</p>
                              <p className="text-base text-gray-300">
                                {project.duration}
                              </p>
                            </div>
                          </div>
                        )}
                        {project.teamSize && (
                          <div className="flex items-center gap-3">
                            <Users className="w-4 h-4 text-violet-400" />
                            <div>
                              <p className="text-sm text-gray-400">Team Size</p>
                              <p className="text-base text-gray-300">
                                {project.teamSize}
                              </p>
                            </div>
                          </div>
                        )}
                        {project.category && (
                          <div className="flex items-center gap-3">
                            <Tag className="w-4 h-4 text-violet-400" />
                            <div>
                              <p className="text-sm text-gray-400">Category</p>
                              <p className="text-base text-gray-300">
                                {project.category
                                  .replace("-", " ")
                                  .toUpperCase()}
                              </p>
                            </div>
                          </div>
                        )}
                        {project.status && (
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-violet-400" />
                            <div>
                              <p className="text-sm text-gray-400">Status</p>
                              <p className="text-base text-gray-300">
                                {project.status.replace("-", " ").toUpperCase()}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 font-heading">
                        Quick Links
                      </h3>
                      <div className="space-y-3">
                        {project.liveUrl && (
                          <Button
                            asChild
                            size="default"
                            className="w-full bg-violet-600 hover:bg-violet-700 text-white"
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
                            size="default"
                            className="w-full border-violet-500/30 text-violet-300 hover:bg-violet-500/10"
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
                        <Button
                          asChild
                          variant="ghost"
                          size="default"
                          className="w-full text-violet-300 hover:bg-violet-500/10"
                        >
                          <Link
                            href="/#projects"
                            className="flex items-center gap-2"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeContent>

              {/* Project Content */}
              {project.content && project.content.length > 0 ? (
                <FadeContent direction="up" delay={0.5}>
                  <Card className="p-6 bg-card/30 border-violet-500/20">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-heading">
                      Project Overview
                    </h3>
                    <RichText value={project.content} />
                  </Card>
                </FadeContent>
              ) : (
                <FadeContent direction="up" delay={0.5}>
                  <Card className="p-6 bg-card/30 border-violet-500/20">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-heading">
                      Project Overview
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-gray-300 leading-relaxed mt-4">
                        This project showcases modern web development practices
                        and demonstrates proficiency in the listed technologies.
                        The application was built with a focus on user
                        experience, performance, and maintainable code
                        architecture.
                      </p>
                    </div>
                  </Card>
                </FadeContent>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <FadeContent direction="up" delay={0.6}>
                  <Card className="p-6 bg-card/30 border-violet-500/20">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-heading flex items-center gap-2">
                      <Target className="w-5 h-5 text-violet-400" />
                      Key Challenges
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeContent>
              )}

              {/* Solutions */}
              {project.solutions && project.solutions.length > 0 && (
                <FadeContent direction="up" delay={0.7}>
                  <Card className="p-6 bg-card/30 border-violet-500/20">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-heading flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Solutions Implemented
                    </h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeContent>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <FadeContent direction="up" delay={0.8}>
                  <Card className="p-6 bg-card/30 border-violet-500/20">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-heading flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                      Key Learnings
                    </h3>
                    <ul className="space-y-2">
                      {project.learnings.map((learning, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeContent>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
