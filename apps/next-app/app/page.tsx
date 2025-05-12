import { client } from '../lib/sanity';
import { aboutQuery } from '../lib/queries';
import { About as AboutType } from '../lib/types';

export const revalidate = 60;

async function getData() {
  const about = await client.fetch<AboutType>(aboutQuery);
  return about;
}

export default async function HomePage() {
  const about = await getData();

  return (
    <div className="mt-30 flex h-full w-full flex-col items-center">
      <p className="text-justify sm:max-w-150">{about?.content || ''}</p>
    </div>
  );
}
