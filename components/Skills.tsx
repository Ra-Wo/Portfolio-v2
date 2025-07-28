"use client";

import AnimatedList from "@/components/ui/animated-list";
import FadeContent from "@/components/ui/fade-content";
import CountUp from "@/components/ui/count-up";
import { DarkVeil } from "@/components/ui/dark-veil";
import { Code2, Database, Globe, Palette, Server, Zap } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      skills: [
        "React & Next.js",
        "TypeScript & JavaScript",
        "Tailwind CSS & Styled Components",
        "HTML5 & CSS3",
        "Responsive Design",
        "State Management (Redux, Zustand)",
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      skills: [
        "Node.js & Express",
        "Python & Django",
        "REST APIs & GraphQL",
        "Authentication & Authorization",
        "Microservices Architecture",
        "API Documentation",
      ],
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      skills: [
        "MongoDB & PostgreSQL",
        "Redis & Caching",
        "Git & GitHub",
        "Docker & Containerization",
        "AWS & Cloud Services",
        "Testing (Jest, Cypress)",
      ],
    },
    {
      title: "Design & Others",
      icon: Palette,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
      skills: [
        "UI/UX Design Principles",
        "Figma & Adobe Creative Suite",
        "Framer Motion & Animations",
        "Performance Optimization",
        "SEO & Web Analytics",
        "Agile & Scrum Methodologies",
      ],
    },
  ];

  const stats = [
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 25, suffix: "+", label: "Technologies" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <DarkVeil intensity="light" pattern="dots">
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <FadeContent className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I
              use to build exceptional digital experiences
            </p>
          </FadeContent>

          {/* Stats Section */}
          <FadeContent className="mb-20" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="space-y-2 p-4 bg-gray-900/30 rounded-lg border border-gray-800/50"
                >
                  <CountUp
                    to={stat.number}
                    suffix={stat.suffix}
                    duration={2.5}
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                  />
                  <p className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeContent>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <FadeContent
                key={index}
                delay={0.1 * index}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6 p-4 bg-gray-900/30 rounded-lg border border-gray-800/50">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl ${category.bgColor} ${category.borderColor} border`}
                  >
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="bg-gray-900/30 rounded-lg border border-gray-800/50 p-6">
                  <AnimatedList
                    items={category.skills}
                    showGradients={true}
                    enableArrowNavigation={false}
                    displayScrollbar={false}
                    className="w-full"
                    onItemSelect={(item, index) => {
                      console.log(`Selected: ${item} at index ${index}`);
                    }}
                  />
                </div>
              </FadeContent>
            ))}
          </div>

          {/* Call to Action */}
          <FadeContent className="text-center mt-20" delay={0.6}>
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl border border-purple-500/20">
              <Code2 className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly
                exploring new tools, frameworks, and best practices to stay at
                the cutting edge of web development.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm opacity-75">
                <Zap className="w-4 h-4" />
                <span>
                  Currently exploring: Next.js 15, React 19, and AI Integration
                </span>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>
    </DarkVeil>
  );
}
