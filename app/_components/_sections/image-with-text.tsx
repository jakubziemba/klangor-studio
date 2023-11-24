import Image from "next/image";

export default function ImageWithText() {
  return (
    <section className="lg:grid-desktop flex flex-wrap gap-12 px-8 py-16 lg:px-12">
      <div className="relative col-start-1 col-end-4 aspect-square w-full">
        <Image
          src="https://res.cloudinary.com/dzyub3iba/image/upload/f_webp,q_80/v1/klangor/riw5xisgefjacompm8iy"
          alt="Klangor Studio"
          fill
          className="object-cover object-center"
          sizes="50vw"
        />
      </div>
      <div className="col-start-5 col-end-8 w-full self-center">
        <p className="text-2xl leading-normal text-black xl:text-3xl xl:leading-relaxed">
          Praca nad projektami ze szczególnym uwzględnieniem ich indywidualnego
          charakteru doprowadziła nas do wielu ciekawych projektów konkursowych
          i realizacyjnych.
        </p>
      </div>
    </section>
  );
}
