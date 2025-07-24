"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "I build things for the web.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Greeting */}
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            Rachid Oudouch
          </h1>

          {/* Animated subtitle */}
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-600 dark:text-gray-300 h-16 flex items-center justify-center">
            <span>
              {text}
              <span
                className={`${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              >
                |
              </span>
            </span>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I am a passionate web developer from Morocco, creating exceptional
            digital experiences with modern technologies. Currently studying at
            1337 Coding School (42 Network).
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:rashidoudouch@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
            </a>

            <button className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center space-x-2">
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
