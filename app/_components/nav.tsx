import Logo from "./logo";

const links = [
  { path: "/", label: "Projekty" },
  { path: "/o-nas", label: "O nas" },
  { path: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  return (
    <header className="sticky left-0 right-0 top-0 z-10 -mb-[75px] h-[75px] text-white mix-blend-difference">
      <div className="lg:grid-desktop flex items-center justify-between lg:px-6 lg:py-2">
        <a href="/" className="lg:col-start-1">
          <Logo className="h-auto w-auto" />
        </a>
        <nav className="lg:col-start-4 lg:col-end-7">
          <ul className="list-none text-xl font-regular tracking-wide lg:grid lg:grid-cols-3 lg:gap-5">
            {links.map(({ label, path }, index) => (
              <li key={label} className={`lg:col-start-${index + 1}`}>
                <a href={path}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
