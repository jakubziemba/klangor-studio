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
    <section>
      <div className="mx-12 flex flex-row border-b border-k-gray py-16">
        <h1 className="flex-1 text-6xl">Projekty</h1>
        <p className="flex-1 font-light tracking-wide">
          Przy realizacji naszych projektów kierujemy się syntetycznymi
          analizami, z poszanowaniem idei, kultury, historii oraz kontekstu
          miejsca. Te główne kryteria stanowią podstawę naszej pracy, w ramach
          której staramy się odpowiedzieć na kluczowe pytania dotyczące relacji
          między kosztami a efektywnością projektowanych obiektów. W naszym
          podejściu łączymy tradycyjne rozwiązania z innowacyjnym podejściem,
          wprowadzając nowoczesne rozwiązania techniczne i metody projektowe.
        </p>
      </div>
      <div className="px-12 pb-12 pt-8">
        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
}
