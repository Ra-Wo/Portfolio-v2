"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import FadeContent from "@/components/ui/fade-content";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Image from "next/image";

// Experience data
const experiences = [
  {
    id: 1,
    company: "Open Development and Education Ltd.",
    logo: "/opendeved_icon.png",
    logoAlt: "Open Development and Education Ltd.",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-orange-600/20",
    borderColor: "border-orange-500/30",
    cardGradient: "from-violet-500/5 via-purple-500/5 to-violet-500/5",
    cardBorder: "border-violet-500/20",
    positions: [
      {
        title: "Full-stack Developer",
        type: "Full-time",
        duration: "May 2024 - Aug 2025 • 1 yr 4 mos",
        badgeStyle: "bg-violet-500/10 text-violet-300 border-violet-500/20",
      },
      {
        title: "Full-stack Developer",
        type: "Internship",
        duration: "Nov 2023 - Apr 2024 • 6 mos",
        badgeStyle: "bg-blue-500/10 text-blue-300 border-blue-500/20",
      },
    ],
    description:
      "Developed and maintained full-stack web applications using modern technologies. Worked extensively with Next.js for frontend development and NestJS for backend services, delivering complete solutions that enhanced user experience and system performance.",
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "React",
      "Full-Stack Development",
      "Team Collaboration",
    ],
  },
  {
    id: 2,
    company: "A-DigitArt",
    logo: "/a_digitart_logo.jpeg",
    logoAlt: "A-DigitArt",
    gradientFrom: "from-pink-500/20",
    gradientTo: "to-pink-600/20",
    borderColor: "border-pink-500/30",
    cardGradient: "from-gray-500/5 via-gray-600/5 to-gray-500/5",
    cardBorder: "border-gray-500/20",
    logoClassName: "rounded-lg",
    positions: [
      {
        title: "Full-stack Developer",
        type: "Full-time",
        duration: "Apr 2023 - Jun 2023 • 3 mos",
        badgeStyle: "bg-violet-500/10 text-violet-300 border-violet-500/20",
      },
    ],
    description:
      "Contributed to full-stack development projects, gaining valuable experience in web application development and modern development practices.",
    technologies: [
      "Next.js",
      "Strapi",
      "Nginx",
      "Web Development",
      "Full-Stack",
      "Team Collaboration",
    ],
  },
];

// Education data
const education = [
  {
    id: 1,
    institution: "1337 Coding School",
    logo: "/1337_icon.png",
    logoAlt: "1337 Coding School",
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-purple-600/20",
    borderColor: "border-blue-500/30",
    cardGradient: "from-blue-500/5 via-purple-500/5 to-blue-500/5",
    cardBorder: "border-blue-500/20",
    hasWhiteBackground: true,
    startDate: "Nov 2021",
    skillsBadge: "React.js, Redux.js and +8 skills",
    description:
      "Intensive computer science education focused on programming fundamentals, algorithms, and modern web development technologies. Part of the prestigious 42 Network, known for its peer-to-peer learning methodology and rigorous curriculum.",
    technologies: [
      "C/C++",
      "Web Development",
      "Algorithms",
      "Data Structures",
      "Software Engineering",
    ],
  },
];

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
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-heading tracking-tight leading-tight bg-gradient-to-r from-violet-600 via-purple-300 to-violet-600 bg-clip-text text-transparent">
              Hey there, I&apos;m Rachid Oudouch
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Full-stack developer specializing in modern web technologies and
              scalable solutions.
            </p>
          </div>
        </FadeContent>

        <div className="max-w-4xl mx-auto">
          {/* Story Section */}
          <FadeContent direction="up" delay={0.2}>
            <div className="mt-20">
              <div className="text-center mb-12">
                <div className="section-decoration mb-4">
                  <h3 className="text-3xl font-bold text-foreground font-heading tracking-tight">
                    My Story
                  </h3>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  My journey into the world of web development
                </p>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed max-w-4xl mx-auto">
                <p>
                  My journey into full-stack development began at
                  <span className="text-violet-400 font-semibold">
                    {" "}
                    1337 Coding School
                  </span>
                  , where I&apos;ve been developing a strong foundation in
                  programming fundamentals. This intensive education, combined
                  with professional experience, has given me a comprehensive
                  understanding of both theoretical concepts and real-world
                  application.
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
                  building robust web applications. I worked extensively with
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
                  experience at Open Development and Education Ltd, where
                  I&apos;ve consistently delivered high-quality solutions and
                  contributed to meaningful projects, developing expertise in
                  modern full-stack development practices.
                </p>
              </div>
            </div>
          </FadeContent>
        </div>

        {/* Experience Section */}
        <FadeContent direction="up" delay={0.6}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="section-decoration mb-4">
                <h3 className="text-3xl font-bold text-foreground font-heading tracking-tight">
                  Experience
                </h3>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Building digital solutions and growing as a developer
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {experiences.map((exp) => (
                <Card
                  key={exp.id}
                  className={cn(
                    "p-6 bg-gradient-to-br",
                    exp.cardGradient,
                    exp.cardBorder
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        `flex-shrink-0 w-16 h-16 bg-gradient-to-br rounded-xl border flex items-center justify-center overflow-hidden`,
                        exp.gradientFrom,
                        exp.gradientTo,
                        exp.borderColor
                      )}
                    >
                      <Image
                        src={exp.logo}
                        alt={exp.logoAlt}
                        width={40}
                        height={40}
                        className={cn(
                          `object-contain ${exp.logoClassName || ""}`
                        )}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {exp.company}
                      </h4>

                      {exp.positions.length > 1 ? (
                        <div className="space-y-3">
                          {exp.positions.map((position, index) => (
                            <div
                              key={index}
                              className={
                                index > 0
                                  ? "pl-4 border-l-2 border-gray-700"
                                  : ""
                              }
                            >
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <Badge className={position.badgeStyle}>
                                  {position.title}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="border-gray-600 text-gray-400"
                                >
                                  {position.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                                <Calendar className="w-4 h-4" />
                                <span>{position.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge className={exp.positions[0].badgeStyle}>
                              {exp.positions[0].title}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="border-gray-600 text-gray-400"
                            >
                              {exp.positions[0].type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.positions[0].duration}</span>
                          </div>
                        </div>
                      )}

                      <p className="text-gray-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-gray-800/50 text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </FadeContent>

        {/* Education Section */}
        <FadeContent direction="up" delay={0.8}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="section-decoration mb-4">
                <h3 className="text-3xl font-bold text-foreground font-heading tracking-tight">
                  Education
                </h3>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Building foundations in code and creative problem solving
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {education.map((edu) => (
                <Card
                  key={edu.id}
                  className={cn(
                    `p-6 bg-gradient-to-br`,
                    edu.cardGradient,
                    edu.cardBorder
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        `flex-shrink-0 w-16 h-16 bg-gradient-to-br rounded-xl border flex items-center justify-center overflow-hidden`,
                        edu.borderColor,
                        edu.gradientFrom,
                        edu.gradientTo
                      )}
                    >
                      {edu.hasWhiteBackground ? (
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                          <Image
                            src={edu.logo}
                            alt={edu.logoAlt}
                            width={36}
                            height={36}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <Image
                          src={edu.logo}
                          alt={edu.logoAlt}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {edu.institution}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.startDate}</span>
                      </div>

                      <div className="mb-4">
                        <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/20 mb-3">
                          {edu.skillsBadge}
                        </Badge>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {edu.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-gray-800/50 text-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
