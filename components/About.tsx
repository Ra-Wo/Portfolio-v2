"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/ui/fade-content";
import { Spotlight } from "@/components/ui/spotlight";
import { TextTrail } from "@/components/ui/text-trail";
import {
  BookOpen,
  Brain,
  Code2,
  Coffee,
  Lightbulb,
  Rocket,
  Target,
  Users,
} from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "1337 School",
      description: "1.5 Years of Study",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "3.5 Years",
      description: "Combined Experience",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "3 Companies",
      description: "Full-Stack Developer",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Recent",
      description: "Open Development & Education Ltd.",
    },
  ];

  const values = [
    {
      icon: <Brain className="w-6 h-6 text-violet-400" />,
      title: "Professional Experience",
      description:
        "Recently completed a Full-Stack Developer role with proven experience across multiple companies, delivering high-quality web applications.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-violet-400" />,
      title: "Continuous Growth",
      description:
        "From internship to full-time roles, I've consistently evolved my skills and taken on greater responsibilities in each position.",
    },
    {
      icon: <Target className="w-6 h-6 text-violet-400" />,
      title: "Full-Stack Expertise",
      description:
        "Specialized in Next.js for frontend and NestJS for backend development, delivering end-to-end solutions with modern full-stack practices.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-violet-400" />,
      title: "Strong Foundation",
      description:
        "Currently studying at 1337 Coding School, building solid programming fundamentals that complement my professional development experience.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen relative py-20 bg-black overflow-hidden"
    >
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen z-10"
        fill="purple"
      />
      <Spotlight
        className="top-10 right-full h-[80vh] w-[50vw] z-10"
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
              About Me
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-heading tracking-tight leading-tight">
              <TextTrail
                delay={0.2}
                stagger={0.1}
                className="bg-gradient-to-r from-violet-600 via-purple-300 to-violet-600 bg-clip-text text-transparent"
              >
                Hey there, I'm Rachid Oudouch
              </TextTrail>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              A passionate web developer from Morocco with an exhilarating
              journey into the world of coding. I'm excited to offer you a
              glimpse of my adventure in creating exceptional digital
              experiences.
            </p>
          </div>
        </FadeContent>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <FadeContent direction="up" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground font-heading tracking-tight">
                  My Story
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    My journey into full-stack development began at
                    <span className="text-violet-400 font-semibold">
                      {" "}
                      1337 Coding School
                    </span>
                    , where I've been developing a strong foundation in
                    programming fundamentals for 1.5 years. This intensive
                    education, combined with almost 2 years of professional
                    experience, has given me a comprehensive understanding of
                    both theoretical concepts and real-world application.
                  </p>
                  <p>
                    Recently completed my role as a
                    <span className="text-violet-400 font-semibold">
                      {" "}
                      Full-Stack Developer
                    </span>{" "}
                    at
                    <span className="text-violet-400 font-semibold">
                      {" "}
                      Open Development and Education Ltd.
                    </span>{" "}
                    (May 2024 - July 2025), where I gained valuable experience
                    building robust web applications over almost 2 years. I
                    worked extensively with
                    <span className="text-violet-400 font-semibold">
                      {" "}
                      Next.js
                    </span>{" "}
                    for frontend development and
                    <span className="text-violet-400 font-semibold">
                      {" "}
                      NestJS
                    </span>{" "}
                    for backend services, delivering complete full-stack
                    solutions.
                  </p>
                  <p>
                    My professional journey includes internship and full-time
                    experience at Open Development and Education Ltd., where
                    I've consistently delivered high-quality solutions and
                    contributed to meaningful projects, developing expertise in
                    modern full-stack development practices.
                  </p>
                </div>
              </div>
            </FadeContent>

            {/* Achievements */}
            <FadeContent direction="up" delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-card/50 border-violet-500/20 hover:bg-card/70 transition-colors duration-200 group"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="text-violet-400 group-hover:text-violet-300 transition-colors duration-200">
                        {achievement.icon}
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        {achievement.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.description}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </FadeContent>
          </div>

          {/* Right Column - Values & Approach */}
          <div className="space-y-8">
            <FadeContent direction="up" delay={0.4}>
              <div>
                <h3 className="text-2xl font-bold text-foreground font-heading mb-6 tracking-tight">
                  What Drives Me
                </h3>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-lg hover:bg-card/30 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors duration-200">
                        {value.icon}
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground tracking-tight">
                          {value.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeContent>

            {/* Current Focus */}
            <FadeContent direction="up" delay={0.5}>
              <Card className="p-6 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-violet-500/5 border-violet-500/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-violet-400" />
                    <h4 className="text-lg font-semibold text-foreground tracking-tight">
                      Currently Exploring
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I'm currently diving deep into advanced web development
                    patterns while continuing my studies at 1337 School. My
                    recent experience with Next.js and NestJS has given me a
                    solid understanding of modern full-stack architecture, and
                    I'm always excited to experiment with emerging technologies
                    that bridge different development paradigms.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge
                      variant="secondary"
                      className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                    >
                      C/C++
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                    >
                      NestJS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-violet-500/10 text-violet-300 border-violet-500/20"
                    >
                      42 Network
                    </Badge>
                  </div>
                </div>
              </Card>
            </FadeContent>
          </div>
        </div>
      </div>
    </section>
  );
}
