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

const AboutCom2 = () => {
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

 <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] px-6 py-8 mx-auto space-y-8 lg:space-y-0 lg:space-x-8 pt-[200px] gap-x-7 mb-40">
 <motion.div
        className="flex-1 max-w-[500px] pl-0 lg:pl-10"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
     
    <img src={assets.hero1} alt=""  />
      </motion.div>
     
     
      {/* Text Section */}
      <motion.div
        className="flex-1 text-center lg:text-left relative"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
 <h1 className="text-[45px] lg:text-[60px] font-bold leading-tight text-white mb-6">
          Loyiha 
          <span className="text-slate-500 ml-4">Maqsadlari</span>
        </h1>
<div className=''>
        <div className='flex '>

          <img className='w-10' src={assets.target} alt=""  />  
          <h2 className='text-white mt-2 pl-2'>Dasturchilarni texnik bilim darajasini holis baholash</h2>
        </div>
        <div className='flex mt-3 '>

          <img className='w-10' src={assets.target} alt=""  />  
          <h2 className='text-white mt-2 pl-2'>Intervyu natijasiga qarab nomzodga kerakli Feedback'lar berish</h2>
        </div>
        <div className='flex mt-3 '>

          <img className='w-10' src={assets.target} alt=""  />  
          <h2 className='text-white mt-2 pl-2'>Intervyular o'tkazish orqali dasturchilar saviyasini oshirish</h2>
        </div>
        <div className='flex  mt-3'>

          <img className='w-10' src={assets.target} alt=""  />  
          <h2 className='text-white mt-2 pl-2'>Intervyu oluvchi mutahasislar sonini oshirish</h2>
        </div>

        </div>
     <div>

     </div>



        

  
        {/* <div className="flex justify-center lg:justify-start mt-6">
          <AnimatedModalDemo />
        </div> */}
      </motion.div>

  
    </div>

    </div>
  )
}

export default AboutCom2