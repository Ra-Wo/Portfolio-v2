"use client";

import { Button } from "@/components/ui/button";
import FadeContent from "@/components/ui/fade-content";
import { Spotlight } from "@/components/ui/spotlight";
import { TextTrail, TextTrailChar } from "@/components/ui/text-trail";
import { ArrowRight, Code2, Github, Linkedin, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import HeroBg with no SSR to prevent hydration mismatch
const HeroBg = dynamic(() => import("@/components/ui/hero-bg"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20" />
  ),
});

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Tech icons configuration array
  const techIcons = [
    {
      id: 1,
      src: "/react_icon.png",
      alt: "React",
      position: "absolute -top-5 -right-8",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/20",
      iconBg: "bg-blue-600/20",
      animation:
        "float 6s ease-in-out infinite, glow 4s ease-in-out infinite alternate",
      delay: "0s",
    },
    {
      id: 2,
      src: "/nodejs_icon.webp",
      alt: "Node.js",
      position: "absolute -bottom-6 -left-6",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/20",
      iconBg: "bg-green-600/20",
      animation:
        "floatSlow 7s ease-in-out infinite, glow 3.5s ease-in-out infinite alternate",
      delay: "1s",
    },
    {
      id: 3,
      src: "/ts_icon.png",
      alt: "TypeScript",
      position: "absolute top-1/4 -left-8",
      bgColor: "bg-blue-700/10",
      borderColor: "border-blue-600/20",
      iconBg: "bg-blue-700/20",
      animation:
        "floatReverse 5.5s ease-in-out infinite, glow 4.5s ease-in-out infinite alternate",
      delay: "2s",
    },
    {
      id: 4,
      src: "/js_icon.png",
      alt: "JavaScript",
      position: "absolute top-1/7 -right-12",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-400/20",
      iconBg: "bg-yellow-500/20",
      animation:
        "float 6.5s ease-in-out infinite, glow 3s ease-in-out infinite alternate",
      delay: "0.5s",
    },
    {
      id: 5,
      src: "/nextjs-icon.png",
      alt: "Next.js",
      position: "absolute top-2/6 -right-6",
      bgColor: "bg-gray-100/10",
      borderColor: "border-gray-600/20",
      iconBg: "bg-black/20",
      animation:
        "floatSlow 8s ease-in-out infinite, glow 5s ease-in-out infinite alternate",
      delay: "1.5s",
      extraClasses: "border border-white/10",
    },
    {
      id: 6,
      src: "/Tailwind_CSS_icon.svg.png",
      alt: "Tailwind CSS",
      position: "absolute top-1/2 -left-4",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-400/20",
      iconBg: "bg-cyan-500/20",
      animation:
        "floatReverse 7.5s ease-in-out infinite, glow 3.8s ease-in-out infinite alternate",
      delay: "0.8s",
    },
    {
      id: 7,
      src: "/NestJS_icon.png",
      alt: "NestJS",
      position: "absolute bottom-1/6 -left-9",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-400/20",
      iconBg: "bg-red-600/20",
      animation:
        "float 6.8s ease-in-out infinite, glow 4.2s ease-in-out infinite alternate",
      delay: "1.2s",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* WebGL Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <HeroBg
          hueShift={330}
          noiseIntensity={0}
          scanlineIntensity={0.1}
          speed={0.4}
          scanlineFrequency={8}
          warpAmount={1}
          resolutionScale={1}
        />
      </div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <Spotlight
        className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen z-20"
        fill="blue"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw] z-20"
        fill="purple"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw] z-20"
        fill="blue"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-left space-y-8">
            {/* Status Badge with Animation */}
            <FadeContent direction="up" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-6 shadow-lg shadow-purple-500/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="font-medium">Available for Work</span>
              </div>
            </FadeContent>

            {/* Main Headline with Enhanced Typography */}
            <FadeContent direction="up" delay={0.2}>
              <div className="space-y-4">
                <div className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-400 tracking-wide">
                  <TextTrail delay={0.3} stagger={0.1}>
                    Hello, I&apos;m
                  </TextTrail>
                </div>
                <h1 className="">
                  <TextTrailChar
                    delay={0.8}
                    stagger={0.08}
                    className="bg-gradient-to-r from-violet-500 via-purple-300 to-purple-800 bg-clip-text text-transparent drop-shadow-2xl"
                  >
                    Rachid Oudouch
                  </TextTrailChar>
                </h1>
              </div>
            </FadeContent>

            {/* Role with Enhanced Styling */}
            <FadeContent direction="up" delay={0.4}>
              <div className="flex items-center gap-3 text-xl sm:text-2xl text-gray-300 font-light">
                <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                  <Code2 className="w-6 h-6 text-purple-400" />
                </div>
                <span>Full-Stack Web Developer</span>
              </div>
            </FadeContent>

            {/* Enhanced Description */}
            <FadeContent direction="up" delay={0.5}>
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  I focus on creating intuitive user experiences while writing
                  clean, maintainable code that brings ideas to life.
                </p>
              </div>
            </FadeContent>

            {/* Enhanced CTA Buttons */}
            <FadeContent direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                  className="px-8 py-4 rounded-xl bg-white text-black"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                  className="px-8 py-4 rounded-xl border-2 border-gray-600 text-gray-300 hover:bg-white/5 hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                  <Mail className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </FadeContent>

            {/* Enhanced Social Links */}
            <FadeContent direction="up" delay={0.7}>
              <div className="flex items-center gap-6">
                <span className="text-gray-500 text-sm font-medium">
                  Follow me:
                </span>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:bg-purple-500/10 backdrop-blur-sm transform hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-blue-500/10 backdrop-blur-sm transform hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="group p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:bg-purple-500/10 backdrop-blur-sm transform hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </a>
                </div>
              </div>
            </FadeContent>
          </div>

          {/* Right Column - Animated Code */}
          <div className="hidden lg:block relative">
            <FadeContent direction="right" delay={0.8}>
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Animated Code Block */}
                <div className="relative max-w-lg w-full">
                  {/* Code Window */}
                  <div className="bg-gray-900/30 backdrop-blur-xl rounded-lg border border-gray-700/20 overflow-hidden">
                    {/* Window Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-800/40 border-b border-gray-700/30">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-gray-400 text-sm font-mono">
                        hero.tsx
                      </div>
                      <div className="w-12"></div>
                    </div>

                    {/* Code Content */}
                    <div className="p-6 font-mono text-sm">
                      {/* Animated typing effect for each line */}
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="text-gray-500 mr-4">1</span>
                          <span className="text-purple-400">const</span>
                          <span className="text-white mx-2">developer</span>
                          <span className="text-gray-400">=</span>
                          <span className="text-white mx-2">{`{`}</span>
                        </div>

                        <div className="flex ml-6">
                          <span className="text-gray-500 mr-4">2</span>
                          <span className="text-blue-400">name:</span>
                          <span className="text-green-400 ml-2">
                            &apos;Rachid Oudouch&apos;
                          </span>
                          <span className="text-gray-400">,</span>
                        </div>

                        <div className="flex ml-6">
                          <span className="text-gray-500 mr-4">3</span>
                          <span className="text-blue-400">role:</span>
                          <span className="text-green-400 ml-2">
                            &apos;Full-Stack Dev&apos;
                          </span>
                          <span className="text-gray-400">,</span>
                        </div>

                        <div className="flex ml-6">
                          <span className="text-gray-500 mr-4">4</span>
                          <span className="text-blue-400">skills:</span>
                          <span className="text-white ml-2">[</span>
                        </div>

                        {/* Animated skills array */}
                        <div className="flex ml-12 animate-pulse">
                          <span className="text-gray-500 mr-4">5</span>
                          <span className="text-green-400">
                            &apos;React&apos;
                          </span>
                          <span className="text-gray-400">,</span>
                          <span className="text-green-400 ml-2">
                            &apos;Next.js&apos;
                          </span>
                          <span className="text-gray-400">,</span>
                        </div>

                        <div
                          className="flex ml-12 animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        >
                          <span className="text-gray-500 mr-4">6</span>
                          <span className="text-green-400">
                            &apos;TypeScript&apos;
                          </span>
                          <span className="text-gray-400">,</span>
                          <span className="text-green-400 ml-2">
                            &apos;Node.js&apos;
                          </span>
                          <span className="text-gray-400">,</span>
                        </div>

                        <div
                          className="flex ml-12 animate-pulse"
                          style={{ animationDelay: "1s" }}
                        >
                          <span className="text-gray-500 mr-4">7</span>
                          <span className="text-green-400">
                            &apos;Tailwind&apos;
                          </span>
                          <span className="text-gray-400">,</span>
                          <span className="text-green-400 ml-2">
                            &apos;NestJS&apos;
                          </span>
                          <span className="text-gray-400">,</span>
                        </div>

                        <div
                          className="flex ml-12 animate-pulse"
                          style={{ animationDelay: "1.5s" }}
                        >
                          <span className="text-gray-500 mr-4">8</span>
                          <span className="text-green-400">
                            &apos;PostgreSQL&apos;
                          </span>
                          <span className="text-gray-400">,</span>
                          <span className="text-green-400 ml-2">
                            &apos;..etc&apos;
                          </span>
                        </div>

                        <div className="flex ml-6">
                          <span className="text-gray-500 mr-4">9</span>
                          <span className="text-white">],</span>
                        </div>

                        <div className="flex">
                          <span className="text-gray-500 mr-4">10</span>
                          <span className="text-white">{`}`}</span>
                          <span className="text-gray-400">;</span>
                        </div>

                        {/* Animated cursor */}
                        <div className="flex mt-4">
                          <span className="text-gray-500 mr-4">11</span>
                          <span className="w-2 h-5 bg-purple-400 animate-pulse"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating tech icons */}
                  {techIcons.map((icon) => (
                    <div
                      key={icon.id}
                      className={`${icon.position} ${icon.bgColor} backdrop-blur-xl rounded-lg p-3 border ${icon.borderColor}`}
                      style={{
                        animation: icon.animation,
                        animationDelay: icon.delay,
                      }}
                    >
                      <div
                        className={`w-8 h-8 ${icon.iconBg} rounded-md flex items-center justify-center overflow-hidden ${icon.extraClasses || ""}`}
                      >
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Animated particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
                  <div
                    className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-40"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-1/3 left-4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-50"
                    style={{ animationDelay: "2s" }}
                  ></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-purple-500/10 rounded-lg blur-xl -z-10"></div>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <FadeContent direction="up" delay={1.0}>
            <button
              onClick={() => scrollToSection("#about")}
              className="group flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
            >
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                Scroll Down
              </span>

              {/* Mouse with scroll wheel */}
              <div className="relative">
                <div className="w-6 h-10 border-2 border-gray-600 group-hover:border-purple-400 rounded-full flex justify-center pt-2 transition-colors duration-300 bg-gray-900/20 backdrop-blur-sm">
                  <div className="w-1 h-3 bg-gray-500 group-hover:bg-purple-400 rounded-full animate-bounce transition-colors duration-300"></div>
                </div>

                {/* Floating dots animation */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col space-y-1">
                  <div
                    className="w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-ping"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-ping"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-purple-400 rounded-full opacity-20 animate-ping"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>
              </div>
            </button>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
