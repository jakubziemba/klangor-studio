import * as contentful from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = contentful.createClient({
  space: space || "",
  accessToken: accessToken || "",
});

export async function getProjects() {
  const entries = await client.getEntries();
  if (entries.items) {
    console.log(entries.items);
    return entries.items;
  }
  console.log(`Error getting Entries.`);
}
