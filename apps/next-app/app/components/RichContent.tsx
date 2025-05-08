import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';

const components = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlFor(value)
        .width(value.fullWidth ? 1200 : 600)
        .url();

      return (
        <div
          className={`${value.fullWidth ? 'w-full' : 'md:inline-block md:w-1/2'} relative my-8`}
        >
          <div className="relative aspect-[16/9]">
            <Image
              src={imageUrl}
              alt={value.alt || ''}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          {value.alt && (
            <p className="mt-2 text-sm text-gray-500">{value.alt}</p>
          )}
        </div>
      );
    },
    video: ({ value }: any) => {
      return (
        <div
          className={`${value.fullWidth ? 'w-full' : 'md:inline-block md:w-1/2'} my-8`}
        >
          <video className="w-full" controls src={value.asset.url} />
        </div>
      );
    },
  },
};

export default function RichContent({ content }: { content: any }) {
  if (!content) return null;

  return (
    <div className="rich-content">
      <PortableText value={content} components={components} />
    </div>
  );
}
