import TestimonialCard from "../TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jacob Gundersen",
      role: "Upwork Client",
      content:
        "Highly recommend. Will use again. Excellent communication, understood all my requirements, turned my job around quickly and expertly.",
      rating: 5,
    },
    {
      name: "Ayoub Kremcht",
      role: "Real-world Client",
      content:
        "An outstanding experience! Communication was top-notch, captured all my needs flawlessly, and executed my project with speed and expertise.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      content:
        "Rachid delivered exactly what we needed for our MVP. His attention to detail and technical expertise made the entire process smooth.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Tech Lead",
      content:
        "Working with Rachid was a pleasure. He brings fresh ideas and solid technical skills to every project. Highly professional.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Product Manager",
      content:
        "Rachid understood our vision and translated it into a beautiful, functional website. His work exceeded our expectations.",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      role: "Business Owner",
      content:
        "Professional, reliable, and skilled. Rachid delivered our project on time and within budget. Would definitely work with him again.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Feedback
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's what my clients have to say about working with me. Their
            satisfaction and success are my top priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ready to work together?
          </p>
          <a
            href="mailto:rashidoudouch@gmail.com"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            <span>Start a Project</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
