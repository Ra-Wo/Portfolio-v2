import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

// Contact Information
export const contactInfo = {
  email: "rashidoudouch@gmail.com",
  emailHref: "mailto:rashidoudouch@gmail.com",
};

// Social Media Links
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
