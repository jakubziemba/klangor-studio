import Image from "next/image";
import Link from "next/link";

export default function HomepageCTASection() {
  return (
    <section className="relative inset-0 flex w-full flex-col px-12 py-48">
      <div className="absolute inset-0 -z-10 h-full w-full bg-k-gray after:absolute after:inset-0 after:z-[10] after:bg-k-black after:object-cover after:object-center after:opacity-50">
        <Image
          src="https://res.cloudinary.com/dzyub3iba/image/upload/f_webp,q_80/v1/klangor/knjbo8ox4l8oann87oe1"
          alt="Klangor Studio"
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover object-[center_70%]"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="mb-12 text-4xl text-white">Zróbmy projekt razem</h3>
        <p className="max-w-[800px] text-base font-regular leading-relaxed tracking-wide text-white xl:leading-relaxed">
          Zawsze szukamy nowych możliwości a nasze projekty realizujemy na
          terenie całej Polski bez względu na dzielącą nas odległość. Skontaktuj
          się z nami w celu otrzymania oferty na projekt.
        </p>
        <Link
          href="/kontakt"
          className="mt-8 w-max border border-white bg-white px-6 py-3 text-base transition-all duration-200 hover:bg-transparent hover:text-white "
        >
          Skontaktuj się z nami
        </Link>
      </div>
    </section>
  );
}
