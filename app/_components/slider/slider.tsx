"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import NavPanel from "./nav-panel";

const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  return (
    <motion.div
      className="relative inset-0 flex h-screen w-screen flex-col overflow-hidden bg-gray"
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
    >
      <NavPanel images={images} current={current} setCurrent={setCurrent} />
      <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="relative left-0 top-0 min-h-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={images[current]}
              alt="Project 1"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </motion.div>
  );
}
