"use client";

import { useState, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "./logo";

const links = [
  { path: "/", label: "Projekty" },
  { path: "/o-nas", label: "O nas" },
  { path: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  console.log("nav rendered");
  const ref = useRef<HTMLHeadElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const [isBackground, setIsBackground] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const main = document.querySelector("main");
    const firstSection = main?.children[0];
    const firstSectionHeight = firstSection?.clientHeight;
    const header = document.querySelector("header");
    const headerHeight = header?.clientHeight;
    const svgPaths = logoRef.current?.querySelectorAll("path");

    if (!headerHeight || !firstSectionHeight) return;

    const target =
      firstSectionHeight - (headerHeight !== undefined ? headerHeight / 2 : 0);

    if (latest > target && ref.current !== null) {
      // setIsBackground(true);
      ref.current.style.color = "black";
      ref.current.style.background = "white";
      if (logoRef.current && latest > target) {
        svgPaths?.forEach((path) => {
          path.style.fill = "black";
          // path.setAttribute("fill", "black");
          path.style.transition = "fill 0.3s";
        });
      }
    }
    if (latest < target && ref.current !== null) {
      // setIsBackground(false);
      ref.current && (ref.current.style.background = "transparent");
      ref.current && (ref.current.style.color = "white");
      svgPaths?.forEach((path) => {
        path.style.fill = "white";
        // path.setAttribute("fill", "white");
      });
    }
  });

  return (
    <header
      ref={ref}
      className={`-mb-nav-height h-nav-height font-regular nav-mask sticky left-0 right-0 top-0 z-10 flex items-center bg-transparent text-white mix-blend-difference backdrop-blur-[2px] transition-[background] duration-[0.3s]`}
    >
      <div className="lg:grid-desktop flex items-center justify-between lg:px-6">
        <a href="/" className="lg:col-start-1">
          <Logo logoRef={logoRef} className="h-auto w-auto" />
        </a>
        <nav className="lg:col-start-4 lg:col-end-7">
          <ul className="list-none text-sm font-medium tracking-wide lg:grid lg:grid-cols-3 lg:gap-5">
            {links.map(({ label, path }, index) => (
              <li
                key={label}
                className={`lg:col-start-${
                  index + 1
                } relative w-max after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:mix-blend-difference after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`}
              >
                <a href={path} className="transition-colors duration-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
