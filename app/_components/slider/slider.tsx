"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import SliderOverlay from "./slider-overlay";
import { projects } from "../../../data/projects";

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
        <SliderOverlay current={current} setCurrent={setCurrent} />
      </MotionConfig>
    </div>
  );
}
