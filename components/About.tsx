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
      description: "42 Network Student",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Multiple Projects",
      description: "Diverse Portfolio",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Client Success",
      description: "5-Star Reviews",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Morocco",
      description: "Based in Morocco",
    },
  ];

  const values = [
    {
      icon: <Brain className="w-6 h-6 text-violet-400" />,
      title: "Problem Solver",
      description:
        "I approach challenges with analytical thinking and creative solutions, turning complex algorithms and data structures into elegant, efficient code.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-violet-400" />,
      title: "Full-Stack Focus",
      description:
        "From low-level programming with C/C++ to modern web development with JavaScript and TypeScript, I bridge the gap between system programming and web technologies.",
    },
    {
      icon: <Target className="w-6 h-6 text-violet-400" />,
      title: "Quality Driven",
      description:
        "Committed to writing clean, maintainable code with attention to detail. My clients consistently provide 5-star reviews for my communication and expertise.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-violet-400" />,
      title: "42 Network Student",
      description:
        "Currently studying at 1337 Coding School (42 Network), where I'm devoted to refining my craft through peer-to-peer learning and challenging projects.",
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading text-foreground">
              <TextTrail delay={0.2} stagger={0.1}>
                Hey there, I'm Rachid Oudouch
              </TextTrail>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                <h3 className="text-2xl font-bold text-foreground font-heading">
                  My Story
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My journey into the world of coding has been an exhilarating
                    ride, starting with a simple curiosity about how websites
                    work. What began as tinkering with HTML and CSS has evolved
                    into a passion for creating sophisticated web applications
                    that solve real-world problems.
                  </p>
                  <p>
                    Armed with a versatile toolkit of skills, I thrive in
                    languages like
                    <span className="text-violet-400 font-semibold"> C</span>,
                    <span className="text-violet-400 font-semibold"> C++</span>,
                    <span className="text-violet-400 font-semibold">
                      {" "}
                      JavaScript
                    </span>
                    , and
                    <span className="text-violet-400 font-semibold">
                      {" "}
                      TypeScript
                    </span>
                    . My educational voyage has steered me to the esteemed
                    <span className="text-violet-400 font-semibold">
                      {" "}
                      1337 Coding School (42 Network)
                    </span>
                    , where I'm devoted to refining my craft.
                  </p>
                  <p>
                    I've been fortunate to work with diverse clients, from Jacob
                    Gundersen on Upwork to real-world clients like Ayoub
                    Kremcht, each providing excellent feedback and contributing
                    to my growth. Every project has been a learning opportunity,
                    pushing me to grow and diversify my skill set.
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
                <h3 className="text-2xl font-bold text-foreground font-heading mb-6">
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
                        <h4 className="text-lg font-semibold text-foreground">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
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
                    <h4 className="text-lg font-semibold text-foreground">
                      Currently Exploring
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm currently diving deep into advanced web development
                    patterns while strengthening my foundation in system
                    programming at 1337 School. Always excited to experiment
                    with emerging technologies that bridge low-level programming
                    concepts with modern web development.
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
                      React/Next.js
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
