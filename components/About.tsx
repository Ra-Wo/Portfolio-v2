"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/ui/fade-content";
import { Spotlight } from "@/components/ui/spotlight";
import { TextTrail } from "@/components/ui/text-trail";
import {
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  Code2,
  Coffee,
  GraduationCap,
  Lightbulb,
  MapPin,
  Rocket,
  Target,
  Users,
} from "lucide-react";

export default function About() {
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
          </div>

          {/* Right Column - Current Focus */}
          <div className="space-y-8">
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

        {/* Experience Section */}
        <FadeContent direction="up" delay={0.6}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Briefcase className="w-6 h-6 text-violet-400" />
                <h3 className="text-3xl font-bold text-foreground font-heading tracking-tight">
                  Experience
                </h3>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                My professional journey in web development
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Current/Recent Position */}
              <Card className="p-6 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-violet-500/5 border-violet-500/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-500/30 flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">OD</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      Open Development and Education Ltd.
                    </h4>
                    <div className="space-y-3">
                      {/* Full-time Position */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge className="bg-violet-500/10 text-violet-300 border-violet-500/20">
                            Full-stack Developer
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-gray-600 text-gray-400"
                          >
                            Full-time
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>May 2024 - Aug 2025 • 1 yr 4 mos</span>
                        </div>
                      </div>

                      {/* Internship Position */}
                      <div className="pl-4 border-l-2 border-gray-700">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/20">
                            Full-stack Developer
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-gray-600 text-gray-400"
                          >
                            Internship
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>Nov 2023 - Apr 2024 • 6 mos</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      Developed and maintained full-stack web applications using
                      modern technologies. Worked extensively with Next.js for
                      frontend development and NestJS for backend services,
                      delivering complete solutions that enhanced user
                      experience and system performance.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        Next.js
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        NestJS
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        TypeScript
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        React
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        Full-Stack Development
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* A-DigitArt Position */}
              <Card className="p-6 bg-gradient-to-br from-gray-500/5 via-gray-600/5 to-gray-500/5 border-gray-500/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl border border-pink-500/30 flex items-center justify-center">
                    <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      A-DigitArt
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className="bg-violet-500/10 text-violet-300 border-violet-500/20">
                        Full-stack Developer
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-400"
                      >
                        Full-time
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Apr 2023 - Jun 2023 • 3 mos</span>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      Contributed to full-stack development projects, gaining
                      valuable experience in web application development and
                      modern development practices.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        Web Development
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        Full-Stack
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        Team Collaboration
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </FadeContent>

        {/* Education Section */}
        <FadeContent direction="up" delay={0.8}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-violet-400" />
                <h3 className="text-3xl font-bold text-foreground font-heading tracking-tight">
                  Education
                </h3>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                My educational journey in computer science and programming
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-6 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 border-blue-500/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl border border-blue-500/30 flex items-center justify-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">1337</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      1337 Coding School
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Nov 2021</span>
                    </div>

                    <div className="mb-4">
                      <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/20 mb-3">
                        React.js, Redux.js and +8 skills
                      </Badge>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      Intensive computer science education focused on
                      programming fundamentals, algorithms, and modern web
                      development technologies. Part of the prestigious 42
                      Network, known for its peer-to-peer learning methodology
                      and rigorous curriculum.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        C/C++
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        React.js
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        Redux.js
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        Algorithms
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        Data Structures
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300"
                      >
                        Software Engineering
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
