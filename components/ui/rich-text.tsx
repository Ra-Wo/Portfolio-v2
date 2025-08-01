import { PortableText } from "@portabletext/react";
import ProjectImage from "./project-image";
import { urlFor } from "@/lib/sanity";

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8">
          <div className="aspect-video relative">
            <ProjectImage
              image={value}
              alt={value.alt || "Content image"}
              title="Content image"
              className="w-full h-full rounded-lg"
              objectFit="contain"
            />
          </div>
          {value.caption && (
            <p className="text-center text-sm text-gray-400 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    codeBlock: ({ value }: any) => (
      <div className="my-6">
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className={`language-${value.language || "text"} text-sm`}>
            {value.code}
          </code>
        </pre>
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-foreground mb-4 mt-8 font-heading">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-foreground mb-3 mt-6 font-heading">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-violet-500 pl-4 my-6 italic text-gray-300">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-200">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-800 px-2 py-1 rounded text-sm text-violet-300">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-violet-400 hover:text-violet-300 underline transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
};

interface RichTextProps {
  value: any[];
  className?: string;
}

export default function RichText({ value, className = "" }: RichTextProps) {
  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <PortableText value={value} components={components} />
    </div>
  );
}
