import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../../lib/types';
import { urlFor } from '../../lib/sanity';

type ProjectPreviewProps = {
  project: Project;
  className?: string;
};

export default function ProjectPreview({
  project,
  className = '',
}: ProjectPreviewProps) {
  const imageUrl = project.mainImage
    ? urlFor(project.mainImage).width(800).height(600).url()
    : '';

  return (
    <Link
      href={`/projects/${project.slug.current}`}
      className={`group block overflow-hidden ${className}`}
    >
      <div className="space-y-4">
        {imageUrl && (
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-medium">{project.title}</h3>
          <p className="mt-1 line-clamp-2 text-gray-700">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
