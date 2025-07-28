"use client";

import {
  Heart,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Coffee,
  Star,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeContent from "@/components/ui/fade-content";
import SpotlightCard from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:rachid.oudouch@example.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800 opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <FadeContent direction="up" delay={0.1}>
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-bold">
                    RO
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Rachid Oudouch
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-400">Full-Stack Developer</p>
                    <Badge variant="success" className="text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Available
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Passionate about creating exceptional digital experiences with
                modern web technologies. Always learning, always building,
                always improving.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </FadeContent>

          {/* Quick Links */}
          <FadeContent direction="up" delay={0.2}>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeContent>

          {/* Contact Info */}
          <FadeContent direction="up" delay={0.3}>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Get In Touch
              </h4>
              <div className="space-y-3 text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">rachid.oudouch@example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">📱</span>
                  <span className="text-sm">+212 6XX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">📍</span>
                  <span className="text-sm">Morocco</span>
                </div>
              </div>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 group transition-all duration-200"
                onClick={() => scrollToSection("#contact")}
              >
                <Award className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Hire Me
              </Button>
            </div>
          </FadeContent>
        </div>

        {/* Bottom Section */}
        <FadeContent direction="up" delay={0.4}>
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                <span>© {currentYear} Rachid Oudouch. Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
                <span>and lots of</span>
                <Coffee className="w-4 h-4 ml-1 text-amber-500" />
              </div>

              <div className="flex items-center space-x-4">
                <Badge
                  variant="outline"
                  className="text-gray-400 border-gray-600"
                >
                  Built with Next.js & Tailwind CSS
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white group transition-all duration-200"
                >
                  <ArrowUp className="w-4 h-4 mr-1 group-hover:-translate-y-1 transition-transform" />
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>

      {/* Floating Back to Top Button */}
      <Button
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 group"
        size="icon"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </footer>
  );
}
