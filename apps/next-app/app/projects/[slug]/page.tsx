import { client } from '../../../lib/sanity';
import { projectBySlugQuery, projectsQuery } from '../../../lib/queries';
import { Project } from '../../../lib/types';
import RichContent from '../../components/RichContent';
import Header from '../../components/Header';
import { notFound } from 'next/navigation';

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const projects = await client.fetch<Project[]>(projectsQuery);

  return projects.map((project: Project) => ({
    slug: project.slug.current,
  }));
}

async function getProject(slug: string) {
  const project = await client.fetch<Project>(projectBySlugQuery, { slug });

  if (!project) {
    notFound();
  }

  return project;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  return (
    <main>
      <article className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-medium">{project.title}</h1>
        <RichContent content={project.content} />
      </article>
    </main>
  );
}
