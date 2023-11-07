"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

type NavPanelProps = {
  images: string[];
  current: number;
  setCurrent: (index: number) => void;
};

export default function NavPanel({
  images,
  current,
  setCurrent,
}: NavPanelProps) {
  return (
    <motion.div
      className="absolute right-8 top-1/2 z-10 flex w-24 -translate-y-1/2 flex-col items-center justify-center gap-8 rounded-lg border border-gray border-opacity-40 bg-gray bg-opacity-25 py-4 shadow-md backdrop-blur-[2px]"
      transition={{ duration: 0.8, delay: 2.4, ease: "easeInOut" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={clsx(
            [
              "relative h-20 w-20 cursor-pointer transition-all hover:opacity-100",
            ],
            [
              current === 0 &&
                index === 0 &&
                "rounded-md border border-gray opacity-100",
            ],
            [
              current === index
                ? "rounded-md border border-gray opacity-100"
                : "opacity-60",
            ],
          )}
          onClick={() => setCurrent(index)}
        >
          <Image
            className="block h-auto w-full p-2"
            src={image}
            quality={30}
            fill
            alt={`Project ${index + 1}`}
            sizes="(min-width: 768px) 15vw, 25vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </motion.div>
  );
}
