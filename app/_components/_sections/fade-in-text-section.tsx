"use client";

import React, { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrase =
  "Klangor Studio to biuro architektoniczne z siedzibą na warszawskim Powiślu, założone w 2021 roku. Początki działalności firmy sięgają 2018 roku, kiedy to powstawały nasze pierwsze projekty znajdujące się w obecnym portfolio. Studio bierze aktywny udział w każdym etapie procesu realizacji inwestycji.";

export default function FadeInTextSection() {
  let refs = useRef<(HTMLSpanElement | null)[]>([]);
  const body = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    if (container.current === null) return;

    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: () => "top 85%",
          end: () => "+=650",
        },
        opacity: 1,
        ease: "none",
        stagger: 0.05,
      });
    }, container); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  const splitWords = (phrase: string) => {
    let body: React.ReactNode[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={word + "_" + i} className="m-[0.5vw] mr-[0.1vw] text-4xl">
          {letters}
        </p>,
      );
    });
    return body;
  };

  const splitLetters = (word: string) => {
    let letters: React.ReactNode[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
          style={{ opacity: 0.2 }}
          className="opacity-20"
        >
          {letter}
        </span>,
      );
    });
    return letters;
  };

  return (
    <section
      ref={container}
      className="lg:grid-desktop items-center px-12 py-16"
    >
      <div
        ref={body}
        className="col-span-7 col-start-1 flex h-min w-[90%] flex-wrap leading-normal text-k-black"
      >
        {splitWords(phrase)}
      </div>
    </section>
  );
}
