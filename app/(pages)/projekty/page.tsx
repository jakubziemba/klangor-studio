import { client } from "@/app/lib/client";
import ProjectGallery from "./project-gallery";

async function getProjects() {
  const res = await client
    .getEntries({ content_type: "project" })
    .then((res) => res);
  const projects = res.items.map((item) => item);
  const projectsData = res.items.map((item) => item.fields);
  const slugs = res.items.map((item) => item.fields.slug);
  return { projects, projectsData, slugs };
}

export default async function Projekty() {
  const { projects, projectsData, slugs } = await getProjects();

  console.log(projectsData);
  return (
    <div className="flex flex-row flex-wrap">
      <ProjectGallery projects={projects} />
    </div>
  );
}
