"use client";

import Link from "next/link";
import ContentfulImage from "./contentful-image";

export default function ProjectPreview({ data }, children) {
  return (
    <Link
      href={`/projekty/${data.fields.slug}`}
      scroll={false}
      className={`group relative transition-all duration-300 ease-in-out`}
    >
      <div className="color-white absolute inset-0 z-10 m-0 flex items-center justify-center bg-black bg-opacity-0 p-0 text-2xl opacity-100 transition-all duration-300 group-hover:visible group-hover:bg-opacity-50">
        <p className="z-30 block text-2xl font-normal text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          {data.fields.title}
        </p>
      </div>
      <div>
        <ContentfulImage
          src={data.fields.featuredImage.fields.file.url}
          width={data.fields.featuredImage.fields.file.details.image.width}
          height={data.fields.featuredImage.fields.file.details.image.width}
          alt={data.fields.featuredImage.fields.title}
        ></ContentfulImage>
      </div>
    </Link>
  );
}
