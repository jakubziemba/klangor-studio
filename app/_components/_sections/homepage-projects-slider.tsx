"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import clsx from "clsx";
import ArrowButtonSVG from "../arrow-button-svg";
import { useMediaQuery } from "usehooks-ts";
import { projects } from "@/data/projects";

// Import Swiper styles
import "swiper/css";
import { motion } from "framer-motion";

export default function HomepageProjectsSlider() {
  const isLargeScreen = useMediaQuery("(min-width: 1920px)");
  return (
    <div className="bg-k-lightgray pb-8">
      <Swiper
        allowSlideNext={true}
        speed={500}
        parallax={true}
        allowSlidePrev={true}
        spaceBetween={isLargeScreen ? 48 : 20}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map(({ id, src, title }, index) => (
          <SwiperSlide
            key={id}
            className="group aspect-square hover:cursor-pointer"
            style={{
              width: "50%",
              maxHeight: "600px",
            }}
          >
            {({ isActive, isPrev, isNext }) => {
              return (
                <>
                  <div
                    className={clsx(
                      `relative inset-0 flex h-full w-full origin-top flex-col overflow-hidden transition-all duration-500 ease-in-out`,
                      isPrev || isNext ? "scale-y-90" : "scale-y-100",
                      // "max-h-[80%]",
                    )}
                  >
                    <Image
                      src={src}
                      fill
                      alt={title}
                      sizes="80vw"
                      className={clsx(
                        "absolute inset-0 h-auto w-full origin-center object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-[0.85]",
                      )}
                    />
                  </div>
                  <SlideTitle title={title} />

                  <div
                    className={clsx(
                      "mt-5 h-px w-[10%] bg-k-orange opacity-0 transition-all duration-500 ease-in-out group-hover:w-[20%]",
                      isActive && "opacity-100",
                    )}
                  ></div>
                </>
              );
            }}
          </SwiperSlide>
        ))}
        <SwiperButtons />
      </Swiper>
      <div className="mt-16 flex justify-center">
        <Link
          href="/projekty"
          className="border border-k-orange bg-k-orange px-6 py-3 text-center text-base text-k-black text-white transition-all hover:bg-transparent hover:text-k-orange"
        >
          Zobacz wszystkie projekty
        </Link>
      </div>
    </div>
  );
}
type SlideContentProps = {
  src: string;
  title: string;
};

type SlideTitleProps = {
  title: string;
};

function SlideTitle({ title }: SlideTitleProps) {
  const swiperSlide = useSwiperSlide();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: swiperSlide.isActive ? 1 : 0,
        transition: { duration: 0.1 },
      }}
      exit={{ opacity: 0 }}
      className="relative bottom-0 left-0 mt-5 w-full text-2xl"
    >
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        exit={{ y: 50, transition: { duration: 0.1 } }}
      >
        {title}
      </motion.span>
    </motion.div>
  );
}

function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <div className="mt-16 flex justify-center">
      <div className="flex gap-2">
        <button onClick={() => swiper.slidePrev()}>
          <ArrowButtonSVG fill="var(--k-black)" />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <ArrowButtonSVG className="-rotate-180" fill="var(--k-black)" />
        </button>
      </div>
    </div>
  );
}
