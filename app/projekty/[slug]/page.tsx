import { client } from "@/app/lib/client";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "project" });
  const paths = res.items.map((item) => ({
    slug: item.fields.slug,
  }));

  return paths;
}

export default async function Page() {
  // const slugs = await getProjectsSlugs();
  // console.log("slugs: ", slugs);

  // console.log(slug);
  // const project = await getProject(params);
  // console.log(project);
  // const preview = await getProjectPreview(project);
  // console.log(preview);
  return <div>Project page</div>;
}
