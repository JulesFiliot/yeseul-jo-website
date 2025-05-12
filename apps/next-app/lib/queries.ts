import { groq } from 'next-sanity';

export const aboutQuery = groq`*[_type == "about"][0]{
  _id,
  content,
  "image": image {
    "asset": asset->{
      _ref,
      url
    },
    alt
  }
}`;

export const workHeroQuery = groq`*[_type == "workHero"][0]`;

export const worksQuery = groq`
*[_type == "work"] {
  _id,
  title,
  slug
}
`;

export const workBySlugQuery = groq`
*[_type == "work" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content
}
`;
