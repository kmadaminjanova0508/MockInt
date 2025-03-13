"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Meteors } from "./ui/meteors";

const content = [
  {
    title: "Regestratsiya", 
    description:
      "Platformga regestratsiya bo'limi orqali regestratsiya qiling yoki oldin royhatdan o'tgan bo'langiz Ism va parolingiz orqali platformaga kiring",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Registratsiya
      </div>
    ),
  },
  {
    title: "Yo'nalish tanlang",
    description:
      "O'z yo'nalishingizni tanlang va saytdagi 'FAQ' bo'limi bilan alohida tanishing",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
      Yo'nalish tanlag
      </div>
    ),
  },
  {
    title: "Admin Bilan Bog'laning",
    description:
      "Shartlar bilan tanishganingizdan so‘ng adminga murojaat qiling va suhbat uchun vaqt belgilang.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Mutahasis tanlang/Voht belgilang
      </div>
    ),
  },
  {
    title: "Interview jarayoni",
    description:
      "Mutaxassis siz bilan darajangizga qarab, 1-2 soat atrofida suhbat olib boradi. ushbu suhbat davomida sizning bilim va ko‘nikmalaringiz, tajribangiz hamda muammolarni hal qilish qobiliyatingiz baholanadi",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       Interview jarayoni
      </div>
    ),
  },
  {
    title: "Interview Natijasi",
    description: "Suhbatdan so‘ng mutaxassis sizga 3-5 kun ichida feedback beradi va darajangiz aniqlanadi.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]  flex items-center justify-center text-white ">
       Interview Natijasi
      </div>
    ),
  },
 
];

const Process = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  return (
    <div className=" bg-slate-900  relative mt-[300px] h-[800px] pt-[100px] shadow-black border-t border-t-blue-400 overflow-hidden">
      <motion.h1
  style={{
    opacity: opacity,
    translateY: translateY,
  }}
      className="text-center text-white text-4xl font-bold mb-10 pt-10  ">
        Interview Tartibi
      </motion.h1>
      <StickyScroll content={content} />
      {/* <Meteors number={20}/> */}
    </div>
  );
};

export default Process;
