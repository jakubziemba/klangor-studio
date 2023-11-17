"use client";

import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrase =
  "Klangor Studio to biuro architektoniczne z siedzibą na warszawskim Powiślu, założone w 2021 roku. Początki działalności firmy sięgają 2018 roku, kiedy to powstawały nasze pierwsze projekty znajdujące się w obecnym portfolio. Studio bierze aktywny udział w każdym etapie procesu realizacji inwestycji.";

export default function FadeInTextSection() {
  let refs = useRef<(HTMLSpanElement | null)[]>([]);
  const body = useRef(null);
  const container = useRef(null);

  function createAnimation() {
    if (container.current === null) return;

    return gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: container.current?.["offsetTop"] * 0.25,
        end:
          container?.current?.["offsetTop"] -
          container?.current?.["offsetHeight"] * 0.85,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const splitWords = (phrase: string) => {
    let body: React.ReactNode[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={word + "_" + i} className="m-[0.5vw] mr-[1.1vw] text-5xl">
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
    <section ref={container} className="flex items-center px-12 py-16">
      <div
        ref={body}
        className="text-k-black flex h-min w-[90%] flex-wrap leading-normal"
      >
        {splitWords(phrase)}
      </div>
    </section>
  );
}
