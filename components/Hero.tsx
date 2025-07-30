"use client";

import { Button } from "@/components/ui/button";
import FadeContent from "@/components/ui/fade-content";
import { Spotlight } from "@/components/ui/spotlight";
import { TextTrail, TextTrailChar } from "@/components/ui/text-trail";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import HeroBg with no SSR to prevent hydration mismatch
const HeroBg = dynamic(() => import("@/components/ui/hero-bg"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20" />
  ),
});

// Dynamically import CircularText with no SSR
const DynamicCircularText = dynamic(
  () => import("@/components/ui/circular-text"),
  {
    ssr: false,
  }
);

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      {/* Floating Circular Text
      <div className="absolute top-20 right-20 opacity-20 hidden lg:block z-30">
        <DynamicCircularText
          text="CREATIVE • DEVELOPER • INNOVATOR • DREAMER • BUILDER • CODER"
          radius={100}
          fontSize={12}
          spinDuration={30}
          onHover="speedUp"
        />
      </div> */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-30">
        <div className="text-center">
          {/* Profile Avatar and Status */}
          <FadeContent direction="scale" delay={0.1}>
            <div className="mb-8 flex flex-col items-center">
              {/* <Avatar className="w-20 h-20 mb-4 ring-2 ring-purple-500/20 ring-offset-4 ring-offset-black">
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-purple-500 to-blue-600 text-white">
                  RO
                </AvatarFallback>
              </Avatar> */}
              {/* <Badge
                variant="success"
                className="mb-4 bg-green-500/10 border-green-500/20 text-green-400"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <Coffee className="w-3 h-3 mr-1" />
                Available for work
              </Badge> */}
            </div>
          </FadeContent>

          {/* Main headline - inspired by the image */}
          <FadeContent direction="up" delay={0.2}>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 mb-6">
                ✨ New Portfolio
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-heading text-foreground tracking-tight leading-tight">
                <TextTrail delay={0.3} stagger={0.15}>
                  Code is poetry.
                </TextTrail>
                <TextTrailChar
                  delay={1.2}
                  stagger={0.05}
                  className="bg-gradient-to-r from-violet-600 via-purple-300 to-violet-600 bg-clip-text text-transparent"
                >
                  Every function tells a story.
                </TextTrailChar>
              </h1>
              <div className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-400 mb-4 font-light">
                <Code2 className="w-5 h-5 text-purple-400" />
                <span>Full-Stack Web Developer</span>
              </div>
              <div className="flex items-center justify-center text-gray-500 mb-8">
                <MapPin className="w-4 h-4 mr-1 text-purple-400" />
                <span className="text-sm">Based in Morocco</span>
              </div>
            </div>
          </FadeContent>

          {/* Description */}
          <FadeContent direction="up" delay={0.3}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              I craft modern web applications with React, Next.js, and
              TypeScript. Passionate about creating clean, efficient code and
              exceptional user experiences.
            </p>
          </FadeContent>

          {/* CTA buttons - inspired by the image design */}
          <FadeContent direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 transition-all duration-200 font-semibold"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-3 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </FadeContent>

          {/* Social links */}
          <FadeContent direction="up" delay={0.5}>
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </FadeContent>

          {/* Scroll indicator */}
          <FadeContent direction="up" delay={0.6}>
            <button
              onClick={() => scrollToSection("#about")}
              className="text-gray-400 hover:text-white transition-colors duration-200 animate-bounce hover:scale-110 transform"
            >
              <ArrowDown className="w-5 h-5" />
            </button>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
