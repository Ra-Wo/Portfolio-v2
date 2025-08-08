import Image from "next/image";
import { urlFor } from "@/lib/sanity";

// Type for Sanity image objects
interface SanityImage {
  asset?: {
    _ref: string;
    _type?: string;
  };
  alt?: string;
  caption?: string;
  _type?: string;
}

interface ProjectImageProps {
  image: SanityImage | unknown;
  alt: string;
  title: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: "cover" | "contain";
  priority?: boolean;
}

export default function ProjectImage({
  image,
  alt,
  title,
  className = "",
  objectFit = "contain",
  priority = false,
}: ProjectImageProps) {
  // Helper function to safely get image URL
  const getImageUrl = () => {
    try {
      const sanityImage = image as SanityImage;
      if (
        sanityImage?.asset?._ref &&
        !sanityImage.asset._ref.startsWith("mock-image")
      ) {
        return urlFor(sanityImage).url();
      }
      return null;
    } catch (err) {
      console.error("Error generating image URL:", err);
      return null;
    }
  };

  const imageUrl = getImageUrl();

  if (imageUrl) {
    return (
      <div className={`relative overflow-hidden bg-black/20 ${className}`}>
        <Image
          src={imageUrl}
          alt={alt || title}
          fill
          unoptimized
          priority={priority}
          className={`${
            objectFit === "cover" ? "object-cover" : "object-contain"
          } transition-transform duration-300`}
          style={{
            objectPosition: "center",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  // Fallback placeholder
  return (
    <div
      className={`bg-gradient-to-br from-violet-900/50 to-purple-900/50 flex items-center justify-center ${className}`}
    >
      <div className="text-center text-violet-300">
        <div className="text-6xl mb-4">🚀</div>
        <p className="text-sm opacity-70">Project Image</p>
      </div>
    </div>
  );
}
