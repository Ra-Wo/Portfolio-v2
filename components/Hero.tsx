"use client";

import { Button } from "@/components/ui/button";

import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, Code2, Download } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { socialLinks, contactInfo } from "@/lib/data";

// Dynamically import HeroBg with no SSR to prevent hydration mismatch
const HeroBg = dynamic(() => import("@/components/ui/hero-bg"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-zinc-900 to-blue-900/20" />
  ),
});

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Rachid-Oudouch-Resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-30">
        <div className="flex flex-col items-center justify-center gap-8 min-h-[80vh]">
          {/* Avatar at the top */}
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-white p-1 shadow-xl">
              <Image
                src="/avatar.png"
                alt="Rachid Oudouch"
                width={192}
                height={192}
                className="object-cover w-full h-full rounded-full"
                priority
              />
            </div>
          </div>

          {/* Content - Centered */}
          <div className="text-center space-y-6 flex flex-col items-center justify-center max-w-4xl">
            {/* Main Headline with Enhanced Typography */}
            <div className="space-y-3">
              <div className="text-base sm:text-lg text-zinc-400 font-light tracking-wide">
                Hi, I&apos;m
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-violet-400 bg-clip-text text-transparent drop-shadow-2xl">
                Rachid Oudouch
              </h1>
            </div>

            {/* Role with Enhanced Styling */}
            <div className="flex items-center justify-center gap-3 text-xl sm:text-2xl lg:text-3xl text-zinc-300 font-light">
              <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
              <span>Full-Stack Web Developer</span>
            </div>

            {/* Enhanced Description */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              I create elegant digital solutions with clean code and intuitive
              design.
              <br className="hidden sm:block" />
              Passionate about building web experiences that make a difference.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="group relative px-8 py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                size="lg"
                onClick={downloadResume}
                className="group relative px-8 py-6 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-200" />
                Download Resume
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.slice(0, 2).map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 bg-zinc-800/30 rounded-lg border border-zinc-700/50 transition-all duration-300 backdrop-blur-sm hover:scale-110 ${
                      social.label === "GitHub"
                        ? "hover:border-purple-500/50 hover:bg-purple-500/5"
                        : "hover:border-blue-500/50 hover:bg-blue-500/5"
                    }`}
                  >
                    <IconComponent
                      className={`w-5 h-5 text-zinc-400 transition-colors ${
                        social.label === "GitHub"
                          ? "group-hover:text-purple-400"
                          : "group-hover:text-blue-400"
                      }`}
                    />
                  </a>
                );
              })}
              <a
                href={contactInfo.emailHref}
                className="group p-3 bg-zinc-800/30 rounded-lg border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-purple-500/5 backdrop-blur-sm hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection("#about")}
            className="group flex flex-col items-center gap-3 text-zinc-400 hover:text-white transition-all duration-300"
          >
            <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              Scroll Down
            </span>

            {/* Mouse with scroll wheel */}
            <div className="relative">
              <div className="w-6 h-10 border-2 border-zinc-600 group-hover:border-purple-400 rounded-full flex justify-center pt-2 transition-colors duration-300 bg-zinc-900/20 backdrop-blur-sm">
                <div className="w-1 h-3 bg-zinc-500 group-hover:bg-purple-400 rounded-full animate-bounce transition-colors duration-300"></div>
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
        </div>
      </div>
    </section>
  );
}
