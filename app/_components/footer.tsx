import ArrowButtonSVG from "./arrow-button-svg";
import Logo from "./logo";

export default function Footer() {
  return (
    <div className="grid grid-cols-8 items-end gap-8 bg-[#F0662E] p-12 font-regular text-white">
      <div className="col-span-8 col-start-1">
        <Logo className="-ml-4 h-auto w-[180px]" />
      </div>
      <div className="col-span-3 col-start-1 text-[18px]">
        <p>Klangor studio Sp. z o.o.</p>
        <p>ul. Tamka 33; 00-355 Warszawa</p>
        <p>NIP: 1133030791 / KRS: 0000892491</p>
      </div>
      <div className="col-span-3 col-start-5 text-[18px]">
        <a href="tel:+48517733902" className="block">
          (+48) 517 733 902
        </a>
        <a href="mailto:studio@klangorstudio.pl" className="block">
          studio@klangorstudio.pl
        </a>
      </div>
      <div className="col-span-1 col-start-8 flex self-end">
        <button
          className=""
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowButtonSVG className="rotate-90" />
        </button>
      </div>
    </div>
  );
}
