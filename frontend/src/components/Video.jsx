import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Boxes } from "@/components/ui/background-boxes";

function Video() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" flex flex-col overflow-hidden w-full relative bg-slate-900 border-t border-t-blue-400">
      <div className="absolute inset-0 w-full h-[800px]">
        <Boxes />
      </div>

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl font-semibold text-white dark:text-white mb-[60px]">
              Batafsil ma’lumot olish uchun <br />
              <span className="text-3xl md:text-[6rem] font-bold mt-1 leading-none">
                Videoni Ko'ring
              </span>
            </h1>
          </>
        }
      >
        <div className="flex justify-center items-center  object-cover h-full w-full  ">
          <iframe
            className="rounded-2xl"
            width="1400"
            height="550"
            src="https://www.youtube.com/embed/OziTdFRiThI?si=xw8jD-xW3q86Tism"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </ContainerScroll>
    </div>
  );
}

export default Video;
