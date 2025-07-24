import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Ra-Wo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/r-oudouch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/r_oudouch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:rashidoudouch@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© {currentYear} Designed & Built by Rachid Oudouch</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
