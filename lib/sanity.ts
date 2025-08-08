import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-07-29",
  useCdn: process.env.NODE_ENV === "production", // Use CDN in production only
  perspective: "published", // Ensure consistent data
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types for Portable Text content
export interface PortableTextBlock {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

// Types for our projects
export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  content?: PortableTextBlock[]; // Rich text content
  image: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  gallery?: Array<{
    asset: {
      _ref: string;
    };
    alt?: string;
    caption?: string;
  }>;
  technologies: string[];
  category?: string;
  status?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
}

// GROQ queries
export const projectsQuery = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  image,
  technologies,
  category,
  status,
  liveUrl,
  githubUrl,
  featured,
  order
}`;

export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(order asc) {
  _id,
  title,
  slug,
  description,
  image,
  technologies,
  category,
  status,
  liveUrl,
  githubUrl,
  featured,
  order
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  content,
  image,
  gallery,
  technologies,
  category,
  status,
  liveUrl,
  githubUrl,
  featured,
  order
}`;

export const projectSlugsQuery = `*[_type == "project"].slug.current`;
