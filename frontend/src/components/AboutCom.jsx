import React from 'react'
import { assets } from "../assets/assets";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedModalDemo } from "@/components/Modal";
import { WobbleCard } from "../components/ui/wobble-card";
import { expertlar } from "../assets/assets";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CodeBlock } from "@/components/ui/code-block";

const AboutCom = () => {
      
    const [ref, inView] = useInView({
        threshold: 0.5, 
        triggerOnce: true, 
      });
    
      const textAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      };
    
      const carouselAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      };

      const code = `const DummyComponent = () => {
        const [count, setCount] = React.useState(0);
       
        const handleClick = () => {
          setCount(prev => prev + 1);
        };
       
        return (
          <div className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
            <p className="mb-2">Fight Club Fights Count: {count}</p>
            <button 
              onClick={handleClick}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Increment
            </button>
          </div>
        );
      };
      `;

  return (
    <div>

 <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] px-6 py-8 mx-auto space-y-8 lg:space-y-0 lg:space-x-8 pt-[200px]">

      {/* Text Section */}
      <motion.div
        className="flex-1 text-center lg:text-left relative"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
 <h1 className="text-[45px] lg:text-[60px] font-bold leading-tight text-white mb-6">
          Loyiha 
          <span className="text-slate-500 ml-4">Haqida</span>
        </h1>

        <p className="text-white text-[12px] lg:text-[18px] leading-relaxed mt-4">
        MockInt loyihasi 2024-yilda o‘z faoliyatini boshlagan bo‘lib, uning asosiy maqsadi dasturchilarni real intervyularga tayyorlashdir. Platforma foydalanuvchilarga turli darajadagi test intervyularini taklif etadi va ularning bilimlarini sinab ko‘rish imkoniyatini yaratadi.
        </p>


   <div className="text-[18px] lg:text-[20px] font-semibold uppercase leading-relaxed mt-10 mb-10">
              <span className="text-white mr-4 ">Biz bilan</span>
              <TypeAnimation
                className="inline-block text-white"
                sequence={[
                  "Real intervyu muhitini his qiling",
                  2000,
                  "Bilim va tajribangizni baholang",
                  2000,
                  "Amaliy tajribaga ega bo'ling",
                  2000,
                  "Stressni kamaytiring",
                  2000,
                  "Ishga kirish imkoniyatingizni oshiring",
                  2000,
                ]}
                speed={60}
                wrapper="span"
                repeat={Infinity}
              />
            </div>


        

  
        <div className="flex justify-center lg:justify-start mt-6">
          <AnimatedModalDemo />
        </div>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        className="flex-1 max-w-[550px] pl-0 lg:pl-10"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
        
 <div className="overflow-x-auto max-w-[90%] mx-auto sm:max-w-full">
    <CodeBlock
      language="jsx"
      filename="DummyComponent.jsx"
      highlightLines={[9, 13, 14, 18]}
      code={code}
      className="text-xs sm:text-sm p-2 sm:p-4"
    />
  </div>
      </motion.div>
    </div>

    </div>
  )
}

export default AboutCom