"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/ui/fade-content";
import { Spotlight } from "@/components/ui/spotlight";
import { TextTrail } from "@/components/ui/text-trail";
import {
  Code2,
  Globe,
  Layers,
  Server,
  Smartphone,
  Zap,
  Rocket,
  Terminal,
  Braces,
  FileCode,
  Atom,
  Monitor,
  Palette,
  Database,
  GitBranch,
  Package,
  Settings,
  Workflow,
  Cloud,
  Gamepad2,
  Box,
  Store,
  Archive,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Programming Languages",
      description: "Core languages for system and web development",
      skills: [
        { name: "C", icon: <Terminal className="w-4 h-4" /> },
        { name: "C++", icon: <Terminal className="w-4 h-4" /> },
        { name: "JavaScript", icon: <Braces className="w-4 h-4" /> },
        { name: "TypeScript", icon: <FileCode className="w-4 h-4" /> },
        { name: "Kotlin", icon: <Code2 className="w-4 h-4" /> },
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Modern web and mobile technologies",
      skills: [
        { name: "React", icon: <Atom className="w-4 h-4" /> },
        { name: "Next.js", icon: <Rocket className="w-4 h-4" /> },
        { name: "React Native", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Redux", icon: <Store className="w-4 h-4" /> },
        { name: "Zustand", icon: <Archive className="w-4 h-4" /> },
        { name: "HTML5", icon: <Globe className="w-4 h-4" /> },
        { name: "CSS3", icon: <Palette className="w-4 h-4" /> },
        { name: "Tailwind CSS", icon: <Palette className="w-4 h-4" /> },
      ],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend & Database",
      description: "Server-side technologies and data management",
      skills: [
        { name: "Node.js", icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", icon: <Zap className="w-4 h-4" /> },
        { name: "NestJS", icon: <Layers className="w-4 h-4" /> },
        { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
        { name: "SQL", icon: <Database className="w-4 h-4" /> },
        { name: "REST APIs", icon: <Workflow className="w-4 h-4" /> },
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Tools & Technologies",
      description: "Development tools and modern workflows",
      skills: [
        { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
        { name: "Docker", icon: <Package className="w-4 h-4" /> },
        { name: "Zod", icon: <Settings className="w-4 h-4" /> },
        { name: "VS Code", icon: <Monitor className="w-4 h-4" /> },
        { name: "Figma", icon: <Palette className="w-4 h-4" /> },
        { name: "Unity Engine", icon: <Gamepad2 className="w-4 h-4" /> },
        { name: "Blender", icon: <Box className="w-4 h-4" /> },
        { name: "Vercel", icon: <Cloud className="w-4 h-4" /> },
      ],
    },
  ];

  // const highlights = [
  //   {
  //     icon: <Layers className="w-5 h-5 text-violet-400" />,
  //     title: "Full-Stack",
  //     description: "End-to-end development",
  //   },
  //   {
  //     icon: <Smartphone className="w-5 h-5 text-violet-400" />,
  //     title: "Responsive",
  //     description: "Mobile-first design",
  //   },

  //   {
  //     icon: <Globe className="w-5 h-5 text-violet-400" />,
  //     title: "Modern Web",
  //     description: "React & Next.js",
  //   },
  //   {
  //     icon: <Rocket className="w-5 h-5 text-violet-400" />,
  //     title: "Performance",
  //     description: "Optimized solutions",
  //   },
  // ];

  return (
    <section
      id="skills"
      className="min-h-screen relative py-20 bg-black overflow-hidden"
    >
      <Spotlight
        className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen z-10"
        fill="blue"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw] z-10"
        fill="purple"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-20">
        {/* Section Header */}
        <FadeContent direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 bg-violet-500/10 border-violet-500/20 text-violet-300"
            >
              Skills & Technologies
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-heading tracking-tight leading-tight">
              <TextTrail
                delay={0.2}
                stagger={0.1}
                className="bg-gradient-to-r from-violet-600 via-purple-300 to-violet-600 bg-clip-text"
              >
                My Technical Arsenal
              </TextTrail>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Armed with a versatile toolkit of skills, I thrive in creating
              robust solutions from system-level programming to modern web
              applications.
            </p>
          </div>
        </FadeContent>

        {/* Skills Highlights */}
        {/* <FadeContent direction="up" delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 border-violet-500/20 hover:bg-card/70 transition-colors duration-200 group text-center"
              >
                <div className="space-y-3">
                  <div className="flex justify-center group-hover:scale-110 transition-transform duration-200">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-foreground tracking-tight text-sm">
                    {highlight.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </FadeContent> */}

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <FadeContent
              key={categoryIndex}
              direction="up"
              delay={0.3 + categoryIndex * 0.1}
            >
              <Card className="p-6 bg-card/30 border-violet-500/20 hover:bg-card/40 transition-colors duration-200">
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground font-heading tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group relative overflow-hidden rounded-lg bg-violet-500/5 border border-violet-500/10 px-3 py-2 hover:bg-violet-500/10 hover:border-violet-500/20 transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-center gap-2">
                          <div className="text-violet-400 group-hover:text-violet-300 group-hover:scale-110 transition-all duration-300">
                            {skill.icon}
                          </div>
                          <span className="text-foreground font-medium group-hover:text-violet-300 transition-colors duration-300 text-sm">
                            {skill.name}
                          </span>
                        </div>
                        {/* Subtle glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </FadeContent>
          ))}
        </div>

        {/* Currently Learning */}
        <FadeContent direction="up" delay={0.6}>
          <Card className="mt-8 p-6 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-violet-500/5 border-violet-500/20">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-violet-400" />
                <h3 className="text-xl font-bold text-foreground font-heading tracking-tight">
                  Currently Learning & Exploring
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Always pushing boundaries and staying ahead of the curve.
                Currently diving deeper into advanced programming concepts while
                exploring modern web technologies and AI integration.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <Badge
                  variant="secondary"
                  className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                >
                  Unity
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                >
                  System Design
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                >
                  WebGL
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                >
                  AI/ML Integration
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                >
                  GraphQL
                </Badge>
              </div>
            </div>
          </Card>
        </FadeContent>
      </div>
    </section>
  );
}
