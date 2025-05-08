import { PortableTextBlock } from '@portabletext/types';

export interface About {
  _id: string;
  content: string;
  image?: {
    asset: {
      _ref: string;
      url: string;
    };
    alt?: string;
  };
}

export interface WorkHero {
  _id: string;
  heroText: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  description: string;
  starred: boolean;
  content: PortableTextBlock[] | any[];
}
