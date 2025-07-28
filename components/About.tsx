"use client";

import {
  User,
  MapPin,
  Calendar,
  Mail,
  Trophy,
  Heart,
  Coffee,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import FadeContent from "@/components/ui/fade-content";
import CountUp from "@/components/ui/count-up";
import SpotlightCard from "@/components/ui/spotlight-card";
import { DarkVeil } from "@/components/ui/dark-veil";

export default function About() {
  return (
    <DarkVeil intensity="medium" pattern="grid">
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeContent direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
                About Me
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Passionate about building digital experiences that matter
              </p>
            </FadeContent>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Info */}
            <div className="space-y-6">
              <FadeContent direction="left" delay={0.2}>
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-16 h-16 ring-2 ring-purple-500/20 ring-offset-4 ring-offset-black">
                    <AvatarFallback className="text-lg font-bold bg-gradient-to-br from-purple-500 to-blue-600 text-white">
                      RO
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">
                        Rachid Oudouch
                      </h3>
                      <Badge
                        variant="success"
                        className="text-xs bg-green-500/10 border-green-500/20 text-green-400"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        Top Developer
                      </Badge>
                    </div>
                    <p className="text-gray-300">Full-Stack Web Developer</p>
                  </div>
                </div>
              </FadeContent>

              <FadeContent direction="left" delay={0.3}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-300 leading-relaxed">
                    I'm a full-stack developer with a passion for creating
                    beautiful, functional, and user-centered digital
                    experiences. With over 3 years of experience in web
                    development, I enjoy working on complex problems and turning
                    ideas into reality.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    My expertise spans across modern JavaScript frameworks,
                    backend technologies, and cloud platforms. I believe in
                    writing clean, maintainable code and staying up-to-date with
                    the latest industry trends.
                  </p>
                </div>
              </FadeContent>

              <FadeContent direction="left" delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SpotlightCard>
                    <div className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800/50">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Role</div>
                        <div className="font-semibold text-white">
                          Full-Stack Developer
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>

                  <SpotlightCard>
                    <div className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800/50">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Location</div>
                        <div className="font-semibold text-white">Morocco</div>
                      </div>
                    </div>
                  </SpotlightCard>

                  <SpotlightCard>
                    <div className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800/50">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Experience</div>
                        <div className="font-semibold text-white">
                          <CountUp to={3} suffix="+ Years" />
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>

                  <SpotlightCard>
                    <div className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800/50">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Email</div>
                        <div className="font-semibold text-white">
                          rachid@example.com
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </FadeContent>
            </div>

            {/* Right side - Experience highlights */}
            <div className="space-y-6">
              <FadeContent direction="right" delay={0.2}>
                <div className="grid grid-cols-2 gap-6">
                  <SpotlightCard>
                    <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800/50">
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        <CountUp to={15} suffix="+" />
                      </div>
                      <div className="text-gray-300">Projects Completed</div>
                    </div>
                  </SpotlightCard>

                  <SpotlightCard>
                    <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800/50">
                      <div className="text-3xl font-bold text-green-400 mb-2">
                        <CountUp to={3} suffix="+" />
                      </div>
                      <div className="text-gray-300">Years Experience</div>
                    </div>
                  </SpotlightCard>
                </div>
              </FadeContent>

              <FadeContent direction="right" delay={0.3}>
                <SpotlightCard>
                  <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800/50">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      What I Do
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">
                          Frontend Development (React, Next.js, Vue)
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">
                          Backend Development (Node.js, Python)
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">
                          Database Design & Management
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">
                          Cloud Platform Integration
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeContent>

              <FadeContent direction="right" delay={0.4}>
                <SpotlightCard>
                  <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800/50">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      When I'm not coding
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Coffee className="w-4 h-4 text-amber-500" />
                        <span className="text-gray-300">
                          Brewing the perfect cup of coffee
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">📚</span>
                        <span className="text-gray-300">
                          Reading tech blogs and documentation
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">🎮</span>
                        <span className="text-gray-300">
                          Playing video games for inspiration
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeContent>
            </div>
          </div>
        </div>
      </section>
    </DarkVeil>
  );
}
