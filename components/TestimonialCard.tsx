import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialCard = ({
  name,
  role,
  content,
  rating,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
      </div>

      <blockquote className="text-gray-700 dark:text-gray-300 italic">
        "{content}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
