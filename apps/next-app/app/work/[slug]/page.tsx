import { client } from '../../../lib/sanity';
import { workBySlugQuery, worksQuery } from '../../../lib/queries';
import { Work } from '../../../lib/types';
import RichContent from '../../../components/RichContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const works = await client.fetch<Work[]>(worksQuery);

  return works.map((work) => ({
    slug: work.slug.current,
  }));
}

async function getWork(slug: string) {
  const work = await client.fetch<Work>(workBySlugQuery, { slug });

  if (!work) {
    notFound();
  }

  return work;
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = await getWork(slug);

  return (
    <div>
      <h1 className="mb-8 text-3xl font-medium">{work.title}</h1>
      <RichContent content={work.content} />
    </div>
  );
}
