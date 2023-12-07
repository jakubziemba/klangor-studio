import { getImageData } from "./getImageData";
import { client } from "@/app/lib/client";

export async function getProjectsSlugs() {
  const res = await client.getEntries({ content_type: "project" });
  const paths = res.items.map((item) => ({
    slug: item.fields.slug,
  }));

  if (paths) return paths;
  // console.log("api.ts - entries.items: ", entries.items);
  console.log(`Error getting Slugs.`);
}

export async function getAllProjects() {
  const entries = await client.getEntries({ content_type: "project" });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries.`);
}

export async function getAllFeaturedProjects() {
  const entries = await client.getEntries({
    content_type: "project",
    "fields.featured": true,
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries.`);
}

export async function getProject(slug: string) {
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
  });

  return items;
}

export async function getProjectPreview(project: any) {
  const { fields } = project;
  const { title, slug, featuredImage } = fields;
  const imageData = featuredImage.fields;
  const image = getImageData(imageData);

  return { title, slug, image };
}

// export async function getAllProjectsPreview(projects: Array<object>) {
//   const projectsPreviewData = projects?.map((project) => {
//     // console.log(project);
//   });
// }
