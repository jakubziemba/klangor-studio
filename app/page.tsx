// import Slider from "./_components/slider/slider";
import { getAllProjects } from "@/app/lib/api";

const metadata = {
  title: "Strona główna | Klangor Studio",
  description:
    "Klangor Studio to biuro architektoniczne z siedzibą na warszawskim Powiślu, założone w 2021 roku.",
};

export default async function Home() {
  // const projects = await getProjects();

  // console.log(projects);
  return (
    <div>
      Home
      {/* <Slider /> */}
      {/* <FadeInTextSection />
      <ImageWithText />
      <HomepageProjectsSlider />
      <HomepageCTASection /> */}
    </div>
  );
}
