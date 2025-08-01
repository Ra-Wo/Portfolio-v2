import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import {
  client,
  projectBySlugQuery,
  projectSlugsQuery,
  type Project,
} from "@/lib/sanity";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(projectSlugsQuery);
    return slugs.map((slug: string) => ({
      slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const project: Project = await client.fetch(projectBySlugQuery, { slug });

    if (!project) {
      return {
        title: "Project Not Found",
      };
    }

    return {
      title: `${project.title} | Rachid's Portfolio`,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        type: "article",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Project | Rachid's Portfolio",
    };
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  try {
    const project: Project = await client.fetch(projectBySlugQuery, { slug });

    if (!project) {
      notFound();
    }

    return <ProjectDetail project={project} />;
  } catch (error) {
    console.error("Error fetching project:", error);
    notFound();
  }
}
