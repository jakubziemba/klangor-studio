// import Image from "next/image";
import Logo from "./logo";

const links = [
  { path: "/", label: "Projekty" },
  { path: "/pracownia", label: "Pracownia" },
  { path: "/zespol", label: "Zespół" },
  { path: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 text-white mix-blend-difference">
      <div className="flex items-center justify-between lg:px-6 lg:py-2">
        <a href="/">
          <Logo className="h-auto w-48" />
        </a>
        <nav className="">
          <ul className="flex list-none gap-x-4 text-base font-light">
            {links.map(({ label, path }) => (
              <li key={label}>
                <a href={path}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
