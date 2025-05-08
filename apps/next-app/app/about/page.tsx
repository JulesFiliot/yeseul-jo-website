import { client } from '../../lib/sanity';
import { aboutQuery } from '../../lib/queries';
import { About as AboutType } from '../../lib/types';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';

export const revalidate = 60;

async function getData() {
  const about = await client.fetch<AboutType>(aboutQuery);
  return about;
}

export default async function AboutPage() {
  const about = await getData();

  return (
    <section className="flex flex-col justify-start sm:flex-row-reverse">
      <div className="w-full sm:max-w-150">
        <p className="text-justify">{about?.content || ''}</p>
      </div>
      {about?.image?.asset && (
        <div className="flex w-full sm:justify-center">
          <Image
            src={urlFor(about.image).url()}
            alt={about.image.alt || 'Profile image'}
            width={500}
            height={500}
            className="aspect-square object-cover"
          />
        </div>
      )}
    </section>
  );
}
