import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

// ========================================
// PERSONAL INFORMATION
// ========================================

export const personalInfo = {
  name: "Rachid Oudouch",
  fullName: "Rachid Oudouch",
  role: "Full-Stack Web Developer",
  tagline:
    "I create elegant digital solutions with clean code and intuitive design.",
  description:
    "Passionate about building web experiences that make a difference.",
  avatar: "/avatar.png",
  resumeFile: "/resume.pdf",
  resumeDownloadName: "Rachid-Oudouch-Resume.pdf",
};

// ========================================
// CONTACT INFORMATION
// ========================================

export const contactInfo = {
  email: "rashidoudouch@gmail.com",
  emailHref: "mailto:rashidoudouch@gmail.com",
};

// ========================================
// SOCIAL MEDIA LINKS
// ========================================

export const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Ra-Wo",
    username: "@Ra-Wo",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rachid-oudouch-95872125a/",
    username: "rachid-oudouch",
  },
  {
    icon: Twitter,
    label: "Twitter/X",
    href: "https://x.com/r_oudouch",
    username: "@r_oudouch",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/r_oudouch",
    username: "@r_oudouch",
  },
];

// ========================================
// FOOTER DATA
// ========================================

export const footerData = {
  brandName: personalInfo.name,
  tagline:
    "Full-stack developer passionate about creating exceptional digital experiences with modern technologies and clean, efficient code.",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  copyright: {
    owner: personalInfo.name,
    startYear: 2024,
  },
};

// ========================================
// HERO DATA
// ========================================

export const heroData = {
  greeting: "Hi, I'm",
  name: personalInfo.name,
  role: personalInfo.role,
  tagline: personalInfo.tagline,
  description: personalInfo.description,
  avatar: personalInfo.avatar,
  buttons: {
    contact: {
      text: "Get In Touch",
      href: "#contact",
    },
    resume: {
      text: "Download Resume",
      file: personalInfo.resumeFile,
      downloadName: personalInfo.resumeDownloadName,
    },
  },
  scrollIndicator: {
    text: "Scroll Down",
    target: "#about",
  },
};

// ========================================
// COMBINED DATA (for convenience)
// ========================================

// Contact Info Array (for Contact component)
export const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: contactInfo.emailHref,
  },
];

// Social Links with Email (for Footer component)
export const socialLinksWithEmail = [
  ...socialLinks,
  {
    icon: Mail,
    label: "Email",
    href: contactInfo.emailHref,
    username: contactInfo.email,
  },
];
