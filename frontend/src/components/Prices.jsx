"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

const Prices = () => {
  return (
    <div>
 
      <LampContainer className="" >
       
      <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl sm:text-4xl md:text-4xl lg:text-7xl font-medium tracking-tight text-transparent pt-[420px] "
        >
          Narxlar
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-5 mt-10 px-4">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" w-[300px] h-auto  sm:w-[300px]  flex flex-col items-center bg-gray-300 p-6 rounded-lg shadow-lg "
          >
            <h2 className="text-lg font-semibold text-center">Junior Specialist</h2>
            <p className="text-sm text-center mt-2">
              Dasturlash sohasida ish boshlayotgan yoki 1-2 oy ish tajribaga ega
              bo'lgan dasturchi.
            </p>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-[15px] lg:mt-[30px]">
             299 000 SO'M
            </button>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="w-[300px] h-auto p-6 flex flex-col items-center bg-gray-300  rounded-lg shadow-lg"
          >
            <h2 className="text-lg font-semibold text-center">Middle Specialist</h2>
            <p className="text-sm text-center mt-2">
              Dasturlash bo'yicha ko'proq tajribaga ega, mustaqil ishlay
              oladigan va kichik loyihalarni boshqaradigan dasturchi.
            </p>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-[15px] lg:mt-[30px]">
             399 000 SO'M
            </button>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" w-[300px]  sm:w-[300px] h-auto flex flex-col items-center bg-gray-300 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-lg font-semibold text-center">Senior Specialist</h2>
            <p className="text-sm text-center mt-2">
              Loyihalarni boshqarish, murakkab texnik masalalarni hal qilish, va
              jamoani rivojlantirish bo'yicha yuqori tajribaga ega dasturchi.
            </p>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-[15px]">
             399 000 SO'M
            </button>
          </motion.div>
        </div>
      </LampContainer>
    </div>
  );
};

export default Prices;
