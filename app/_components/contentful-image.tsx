// Might be irrelevant but this component was originally in /lib folder in the root of the project
// Source: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/lib/contentful-image.tsx
'use client';

import Image from 'next/image';

interface ContentfulImageProps {
  src: string;
  width?: number;
  quality?: number;
  [key: string]: any; // For other props that might be passed
}

const contentfulLoader = ({ src, width, quality }: ContentfulImageProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function ContentfulImage(props: ContentfulImageProps) {
  return <Image alt={props.alt} loader={contentfulLoader} {...props} />;
}
