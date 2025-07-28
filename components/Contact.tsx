"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";
import FadeContent from "@/components/ui/fade-content";
import SpotlightCard from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DarkVeil } from "@/components/ui/dark-veil";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message sent! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rachid.oudouch@example.com",
      link: "mailto:rachid.oudouch@example.com",
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+212 6XX XXX XXX",
      link: "tel:+212600000000",
      color: "bg-green-500/20 text-green-400",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Morocco",
      link: "#",
      color: "bg-purple-500/20 text-purple-400",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:rachid.oudouch@example.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <DarkVeil intensity="medium" pattern="grid">
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <FadeContent direction="up" delay={0.1}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <MessageCircle className="w-6 h-6" />
                  </AvatarFallback>
                </Avatar>
                <Badge variant="success">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for hire
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or just want to chat? I'd love to hear
                from you. Let's create something amazing together!
              </p>
            </FadeContent>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeContent direction="left" delay={0.2}>
              <SpotlightCard>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Send Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello!"
                        className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 group transition-all duration-200"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </SpotlightCard>
            </FadeContent>

            {/* Contact Info */}
            <div className="space-y-6">
              <FadeContent direction="right" delay={0.2}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Let's Connect
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I'm always open to discussing new opportunities, creative
                    projects, or just having a friendly chat about technology
                    and development.
                  </p>
                </div>
              </FadeContent>

              {/* Contact Information */}
              <FadeContent direction="right" delay={0.3}>
                <div className="space-y-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <SpotlightCard key={index}>
                      <a
                        href={info.link}
                        className="flex items-center p-6 transition-all duration-200 hover:scale-[1.02]"
                      >
                        <div className="flex-shrink-0">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${info.color}`}
                          >
                            <info.icon className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                            {info.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </SpotlightCard>
                  ))}
                </div>
              </FadeContent>

              {/* Social Links */}
              <FadeContent direction="right" delay={0.4}>
                <SpotlightCard>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      Follow Me
                    </h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </FadeContent>

              {/* Response Time */}
              <FadeContent direction="right" delay={0.5}>
                <SpotlightCard>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Quick Response 🚀
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      I typically respond to messages within 24 hours. For
                      urgent matters, feel free to reach out via phone or
                      LinkedIn.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        Usually replies within a few hours
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeContent>
            </div>
          </div>

          {/* Call to Action */}
          <FadeContent direction="up" delay={0.6}>
            <div className="mt-16">
              <SpotlightCard>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                    Let's discuss your ideas and bring them to life with modern
                    web technologies!
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg group transition-all duration-200"
                    onClick={() => document.getElementById("message")?.focus()}
                  >
                    <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Start a Conversation
                  </Button>
                </div>
              </SpotlightCard>
            </div>
          </FadeContent>
        </div>
      </section>
    </DarkVeil>
  );
}
