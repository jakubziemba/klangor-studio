"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import SliderButtonSVG from "./slider-button-svg";

const images = [
  "https://res.cloudinary.com/dzyub3iba/image/upload/f_auto,q_100/v1/klangor/bxqnpuv0rcck1ekyodol",
  "https://res.cloudinary.com/dzyub3iba/image/upload/f_auto,q_100/v1/klangor/p8exlx9vip1t3w3irbx1",
  "https://res.cloudinary.com/dzyub3iba/image/upload/f_auto,q_100/v1/klangor/el52hgy28uhgeus6ijan",
  "https://res.cloudinary.com/dzyub3iba/image/upload/f_auto,q_100/v1/klangor/kc9xsoo6zlsfagu3cha1",
  "https://res.cloudinary.com/dzyub3iba/image/upload/f_auto,q_100/v1/klangor/pywrnuwpmjszloqrcm0m",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [introEnded, setIntroEnded] = useState(false);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <motion.div
      className="bg-gray relative inset-0 flex h-screen w-full flex-col overflow-hidden"
      initial={{
        scale: 0.6,
        clipPath: "inset(0 40% 0 40%)",
      }}
      animate={{
        scale: 1,
        clipPath: "inset(0 0% 0 0%)",
        transition: {
          clipPath: { duration: 1.2, delay: 0.5, type: "spring", bounce: 0 },
          scale: { duration: 1.4, delay: 1.6, type: "spring", bounce: 0 },
        },
      }}
      onAnimationComplete={() => setIntroEnded(true)}
    >
      <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="relative inset-0 min-h-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={images[current]}
              alt="Project 1"
              fill
              priority
              loading="eager"
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
      <motion.div className="lg:grid-desktop absolute bottom-0 left-0 right-0 bg-opacity-70 bg-gradient-to-t from-black from-[-20%] to-transparent to-[80%] py-8 mix-blend-difference lg:px-12">
        <AnimatePresence mode="wait">
          <motion.h1
            key={current}
            className="text-6xl text-white lg:col-start-1 lg:col-end-7"
            transition={{
              ease: "easeInOut",
            }}
            initial={{ opacity: 0, y: "100%" }}
            animate={{
              opacity: 1,
              y: "0%",
              transition: {
                y: { type: "spring", bounce: 0, duration: 0.67 },
                opacity: { duration: 0.3 },
                delay: introEnded ? 0 : 2.8,
              },
            }}
            exit={{
              opacity: 0,
              y: "100%",
              transition: {
                delay: 0,
                opacity: { duration: 0.3 },
                y: { duration: 0.4, ease: "backOut" },
              },
            }}
          >
            {current + 1}. Project
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, delay: introEnded ? 0 : 3 },
            }}
            className="flex gap-3 lg:col-start-8 lg:col-end-9"
          >
            <button className="w-max text-white" onClick={prevSlide}>
              <SliderButtonSVG />
            </button>
            <button className="text-white" onClick={nextSlide}>
              <SliderButtonSVG className="rotate-180" />
            </button>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
