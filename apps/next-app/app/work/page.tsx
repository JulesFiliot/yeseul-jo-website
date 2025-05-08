import { client } from '../../lib/sanity';
import { projectsQuery, workHeroQuery } from '../../lib/queries';
import { Project, WorkHero } from '../../lib/types';
import ProjectGrid from '../components/ProjectGrid';

export const revalidate = 60;

async function getData() {
  const projects = await client.fetch<Project[]>(projectsQuery);
  const workHero = await client.fetch<WorkHero>(workHeroQuery);
  return { projects, workHero };
}

export default async function WorkPage() {
  const { projects, workHero } = await getData();
  const heroText = workHero?.heroText || 'Welcome to my work';

  return (
    <main>
      <h1 className="mb-4 text-3xl font-bold">{heroText}</h1>
      <section className="mb-20">
        <ProjectGrid projects={projects} />
      </section>
    </main>
  );
}
