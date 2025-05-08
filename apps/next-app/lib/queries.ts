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

export const projectsQuery = groq`
*[_type == "project"] | order(starred desc) {
  _id,
  title,
  slug,
  mainImage,
  description,
  starred
}
`;

export const projectBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  description,
  starred,
  content
}
`;
