"use client";

import Link from "next/link";
import ContentfulImage from "./contentful-image";

export default function ProjectPreview({ data }, children) {
  console.log(data);

  return (
    <Link
      href={`/projekty/${data.fields.slug}`}
      scroll={false}
      className="transition-opacity duration-300 ease-in-out hover:opacity-70"
    >
      <ContentfulImage
        src={data.fields.featuredImage.fields.file.url}
        width={data.fields.featuredImage.fields.file.details.image.width}
        height={data.fields.featuredImage.fields.file.details.image.width}
        alt={data.fields.featuredImage.fields.title}
      ></ContentfulImage>
    </Link>
  );
}
