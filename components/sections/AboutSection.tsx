import { Code, Database, Globe, Smartphone } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      icon: Database,
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
      ],
    },
    {
      category: "Languages",
      icon: Code,
      technologies: ["C", "C++", "JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about who I am, what I do, and what I'm passionate
            about.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and personal info */}
          <div className="space-y-6">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto lg:mx-0 flex items-center justify-center">
              <span className="text-white text-6xl font-bold">RO</span>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Passionate Web Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Hey there, I'm Rachid Oudouch, a passionate web developer from
                Morocco. My journey into the world of coding has been an
                exhilarating ride, and I'm excited to offer you a glimpse of it.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Armed with a versatile toolkit of skills, I thrive in languages
                like C, C++, JavaScript, and TypeScript. My educational voyage
                has steered me to the esteemed 1337 Coding School (42 Network),
                where I'm devoted to refining my craft.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I've been fortunate to partake in a diverse range of projects,
                each contributing to my growth and the diversification of my
                skill set.
              </p>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Technical Skills
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.category}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
