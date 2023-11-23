"use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { projects } from "@/data/projects";

// export default function HomepageProjectsSlider() {
//   return (
//     <section className="flex w-full flex-row overflow-hidden">
//       <motion.div className="flex h-96 w-full">
//         {projects.map(({ id, src, title }, index) => (
//           <div key={id} className="relative inset-0">
//             <Image src={src} fill alt={title} style={{ objectFit: "cover" }} />
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "@/data/projects";

// Import Swiper styles
import "swiper/css";

export default function HomepageProjectsSlider() {
  return (
    <div className="bg-k-lightgray py-8">
      <Swiper
        spaceBetween={20}
        slidesPerView={2.5}
        centeredSlides={true}
        loop={true}
        effect="coverflow"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="col-span-8"
      >
        {projects.map(({ id, src, title }, index) => (
          <SwiperSlide key={id} className="">
            <div className="relative inset-0 flex h-[500px] w-full flex-col">
              <Image
                src={src}
                fill
                className="aspect-square object-cover"
                alt={title}
                sizes="80vw"
              />
            </div>
            <div className="relative bottom-0 left-0 mt-5 w-full text-2xl">
              {title}
            </div>
            <div className="mt-5 h-px w-[10%] bg-black"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
