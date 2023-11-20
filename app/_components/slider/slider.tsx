"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig, spring } from "framer-motion";
import SliderButtonSVG from "./slider-button-svg";

const projects = [
  {
    id: crypto.randomUUID(),
    title: "Dom pod Warszawą | Sękocin-Las",
    src: "https://res.cloudinary.com/dzyub3iba/image/upload/f_auto,q_100/v1/klangor/kc9xsoo6zlsfagu3cha1",
  },
  {
    id: crypto.randomUUID(),
    title: "Dom pod Szczecinem | Jęczydół",
    src: "https://res.cloudinary.com/dzyub3iba/image/upload/f_auto,q_100/v1/klangor/bxqnpuv0rcck1ekyodol",
  },
  {
    id: crypto.randomUUID(),
    title: "Dom w Kampinosie | Wólka",
    src: "https://res.cloudinary.com/dzyub3iba/image/upload/f_auto,q_100/v1/klangor/p8exlx9vip1t3w3irbx1",
  },
  {
    id: crypto.randomUUID(),
    title: "Skośna | Warszawa",
    src: "https://res.cloudinary.com/dzyub3iba/image/upload/f_auto,q_100/v1/klangor/el52hgy28uhgeus6ijan",
  },

  {
    id: crypto.randomUUID(),
    title: "Dom jednorodzinny | Sulejówek",
    src: "https://res.cloudinary.com/dzyub3iba/image/upload/f_auto,q_100/v1/klangor/pywrnuwpmjszloqrcm0m",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) =>
        current === projects.length - 1 ? 0 : current + 1,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <div className="bg-gray relative inset-0 flex h-screen w-full flex-col overflow-hidden">
      <MotionConfig transition={{ type: "spring", bounce: 0 }}>
        <motion.div
          className="flex flex-row"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: `-${current * 100}%`,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.6,
              opacity: { duration: 0.2 },
            },
          }}
        >
          {projects.map(({ id, title, src }, index) => (
            <motion.div
              key={id}
              className="relative inset-0 h-screen w-full flex-shrink-0"
              initial={{ x: "0%" }}
            >
              <Image
                src={src}
                alt={title}
                fill
                priority={index === 0 ? true : false}
                loading="eager"
                sizes="100vw"
                style={{
                  position: "absolute",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="lg:grid-desktop lg:content absolute bottom-0 left-0 right-0 h-24 bg-opacity-70 bg-gradient-to-t from-black from-[-20%] to-transparent to-[80%] mix-blend-difference lg:px-12">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              }}
              className="relative left-0 top-1/2 flex -translate-y-1/2 items-center overflow-hidden lg:col-start-1 lg:col-end-7"
            >
              <motion.h1
                className="text-5xl text-white"
                initial={{ y: "50%", opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: "0%",
                  transition: {
                    duration: 0.28,
                    ease: [0.33, 1, 0.68, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  y: "-30%",
                  transition: {
                    duration: 0.2,
                    ease: [0.33, 1, 0.68, 1],
                  },
                }}
              >
                {projects[current].title}
              </motion.h1>
            </motion.span>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            className="flex gap-3 lg:col-start-8 lg:col-end-9"
          >
            <button className=" text-white" onClick={prevSlide}>
              <SliderButtonSVG />
            </button>
            <button className="text-white" onClick={nextSlide}>
              <SliderButtonSVG className="rotate-180" />
            </button>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </div>
  );
}
