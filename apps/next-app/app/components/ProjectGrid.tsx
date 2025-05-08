import { Project } from '../../lib/types';
import ProjectPreview from './ProjectPreview';

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="mb-20" id="work">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectPreview
            key={project._id}
            project={project}
            className={project.starred ? 'md:col-span-2' : ''}
          />
        ))}
      </div>
    </section>
  );
}
