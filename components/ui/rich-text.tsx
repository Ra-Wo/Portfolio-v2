import { PortableText } from "@portabletext/react";
import ProjectImage from "./project-image";
import { PortableTextBlock } from "@/lib/sanity";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: any = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            <p className="text-center text-sm text-zinc-400 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    codeBlock: ({ value }: any) => (
      <div className="my-6">
        <pre className="bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <code className={`language-${value.language || "text"} text-sm`}>
            {value.code}
          </code>
        </pre>
      </div>
    ),
  },
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-foreground mb-4 mt-8 font-heading">
        {children}
      </h2>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-foreground mb-3 mt-6 font-heading">
        {children}
      </h3>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: ({ children }: any) => (
      <p className="text-zinc-300 leading-relaxed mb-4">{children}</p>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-violet-500 pl-4 my-6 italic text-zinc-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside text-zinc-300 mb-4 space-y-2 ml-4">
        {children}
      </ul>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside text-zinc-300 mb-4 space-y-2 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bullet: ({ children }: any) => (
      <li className="text-zinc-300">{children}</li>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    number: ({ children }: any) => (
      <li className="text-zinc-300">{children}</li>
    ),
  },
  marks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strong: ({ children }: any) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    em: ({ children }: any) => (
      <em className="italic text-zinc-200">{children}</em>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code: ({ children }: any) => (
      <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-violet-300">
        {children}
      </code>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ value, children }: any) => (
      <a
        href={value?.href || "#"}
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
  value: PortableTextBlock[];
  className?: string;
}

export default function RichText({ value, className = "" }: RichTextProps) {
  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <PortableText value={value} components={components} />
    </div>
  );
}
