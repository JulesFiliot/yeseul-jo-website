import { client } from '../lib/sanity';
import { aboutQuery } from '../lib/queries';
import { About as AboutType } from '../types/sanity';
import { ExploreWorkLink } from '../components/ExploreWorkLink';

export const revalidate = 60;

async function getData() {
  const about = await client.fetch<AboutType>(aboutQuery);
  return about;
}

export default async function HomePage() {
  const about = await getData();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-justify md:max-w-150">{about?.content || ''}</p>
      <ExploreWorkLink />
    </div>
  );
}
