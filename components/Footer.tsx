"use client";

import { Heart, ArrowUp, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinksWithEmail, footerData } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background/95 backdrop-blur-sm border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3
                className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-violet-600 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-pacifico)" }}
              >
                {footerData.brandName}
              </h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                {footerData.tagline}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-foreground/80 mb-3 uppercase tracking-wider">
                Built With
              </h4>
              <div className="flex flex-wrap gap-2">
                {footerData.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-medium text-foreground/80 mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinksWithEmail.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-violet-400 transition-colors duration-200 group"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="text-sm">{social.username}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>
                © {currentYear} {footerData.copyright.owner}.
              </span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-400" />
              </span>
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="group text-muted-foreground hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
    </footer>
  );
}
