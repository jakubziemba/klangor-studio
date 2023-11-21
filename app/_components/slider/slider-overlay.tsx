"use client";
import { motion, AnimatePresence } from "framer-motion";
import ArrowButtonSVG from "../arrow-button-svg";
import { projects } from "./data";

type SliderOverlayProps = {
  current: number;
  setCurrent: (current: number) => void;
};

export default function SliderOverlay({
  current,
  setCurrent,
}: SliderOverlayProps) {
  const nextSlide = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.28, ease: [0.33, 1, 0.68, 1] },
      }}
      className="lg:grid-desktop lg:content absolute bottom-0 left-0 right-0 h-24 bg-opacity-70 bg-gradient-to-t from-black from-[-20%] to-transparent to-[80%] mix-blend-difference lg:px-12"
    >
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
            className="text-3xl text-white lg:text-4xl"
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
          <ArrowButtonSVG />
        </button>
        <button className="text-white" onClick={nextSlide}>
          <ArrowButtonSVG className="rotate-180" />
        </button>
      </motion.div>
    </motion.div>
  );
}
