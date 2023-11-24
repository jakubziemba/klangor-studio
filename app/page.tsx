import FadeInTextSection from "./_components/_sections/fade-in-text-section";
import HomepageProjectsSlider from "./_components/_sections/homepage-projects-slider";
import ImageWithText from "./_components/_sections/image-with-text";
import Slider from "./_components/slider/slider";

const metadata = {
  title: "Strona główna | Klangor Studio",
  description:
    "Klangor Studio to biuro architektoniczne z siedzibą na warszawskim Powiślu, założone w 2021 roku.",
};

export default function Home() {
  return (
    <>
      <Slider />
      <FadeInTextSection />
      <ImageWithText />
      <HomepageProjectsSlider />
    </>
  );
}
