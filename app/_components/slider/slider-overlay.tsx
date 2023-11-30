"use client";
import { motion } from "framer-motion";
import ArrowButtonSVG from "../arrow-button-svg";
import { projects } from "../../../data/projects";

type SliderOverlayProps = {
  current: number;
  setCurrent: (current: number) => void;
};

const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
  },
};

const buttonClick = {
  scale: 0.95,
  transition: {
    duration: 0.2,
  },
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        className="flex gap-3 lg:col-start-8 lg:col-end-9"
      >
        <motion.button
          className="text-white"
          onClick={prevSlide}
          whileHover={buttonHover}
          whileTap={buttonClick}
        >
          <ArrowButtonSVG />
        </motion.button>
        <motion.button
          className="text-white"
          onClick={nextSlide}
          whileHover={buttonHover}
          whileTap={buttonClick}
        >
          <ArrowButtonSVG className="rotate-180" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
