import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import { PortableTextBlock } from '@portabletext/types';
import React from 'react';

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    url?: string;
  };
  alt?: string;
  fullWidth?: boolean;
  [key: string]: unknown;
}

interface SanityVideo {
  _type: 'video';
  asset: {
    _ref: string;
    url: string;
  };
  fullWidth?: boolean;
  [key: string]: unknown;
}

const components = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
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
    video: ({ value }: { value: SanityVideo }) => {
      return (
        <div
          className={`${value.fullWidth ? 'w-full' : 'md:inline-block md:w-1/2'} my-8`}
        >
          <video className="w-full" controls src={value.asset.url} />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-justify">{children}</p>
    ),
  },
};

export default function RichContent({
  content,
}: {
  content: PortableTextBlock[];
}) {
  if (!content) return null;

  return (
    <div className="rich-content">
      <PortableText value={content} components={components} />
    </div>
  );
}
