import React from "react";
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

const Hero = () => {
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

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] px-6 py-8 mx-auto space-y-8 lg:space-y-0 lg:space-x-8 ">
      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-[800px]">
        <Boxes />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] px-6 py-8 mx-auto space-y-8 lg:space-y-0 lg:space-x-8 pt-[200px]">
      {/* Text Section */}
      <motion.div
        className="flex-1 text-center lg:text-left relative"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
        <h1 className="text-[45px] lg:text-[60px] font-bold leading-tight text-white mb-6">
          MOCKINT - <br />
          <span className="text-slate-500">MOCK INTERVIEW</span>
        </h1>
        <p className="text-white text-[12px] lg:text-[18px] leading-relaxed mt-4">
          SINOV INTERVYULAR TOPSHIRISH, BILIM VA TAJRIBANGIZNI SINASH,
          SHUNINGDEK TAJRIBALI DASTURCHILARDAN "FEEDBACK"LAR OLISH UCHUN
          MO’LJALLANGAN LOYIHA
        </p>


   {/* <div className="text-[18px] lg:text-[20px] font-semibold uppercase leading-relaxed">
              <span className="text-white mr-4">Biz bilan</span>
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
            </div> */}


        {/* Counters */}
        <div ref={ref} className=" hidden lg:flex gap-x-6 lg:gap-x-10 mb-12 mt-5">
          <div className="flex gap-3 pt-3">
            <div className="text-[35px] font-tertiary t mb-2 text-white">
              {inView ? <CountUp start={0} end={13} duration={3} /> : null}+
            </div>
            <div className="font-primary text-md tracking-[2px] text-white mt-4">
              Yo'nalishlar
            </div>
          </div>
          <div className="flex gap-3 pt-3">
            <div className="text-[35px] font-tertiary text-gradient mb-2 text-white">
              {inView ? <CountUp start={0} end={15} duration={3} /> : null}+
            </div>
            <div className="font-primary text-sm tracking-[2px] text-white mt-4">
              Mutahasislar
            </div>
          </div>
          <div>
          </div>
        </div>

  
        <div className="flex justify-center lg:justify-start mt-6">
          <AnimatedModalDemo />
        </div>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        className="flex-1 max-w-[500px] pl-0 lg:pl-10"
        initial="hidden"
        animate="visible"
        variants={carouselAnimation}
      >
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {/* Expert 1 */}
            <CarouselItem className="text-white flex items-center justify-center sm:w-[300px]">
              <WobbleCard containerClassName="col-span-1 min-h-[300px] w-[400px] h-[500px] flex flex-col items-center justify-center text-center border-2 border-blue-500 ">
                <div className="relative">
                  <img
                    src={expertlar.abrorhoja}
                    alt=""
                    className="rounded-full border-2 border-blue-500 w-[155px] mx-auto "
                  />
                  <div className="w-[40px] bg-gray-800 mx-auto rounded-full h-[40px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[115px] text-xl">
                    <h3 className="text-blue-500 font-bold mt-1">in</h3>
                  </div>
                </div>

                <h2 className="max-w-80 text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white mx-auto mt-5">
                  Abrorxo'ja Yodgorov
                </h2>
                <h1 className="text-white mt-3 text-2xl">Lead Android Engineer</h1>
                <div>
                  <p className="mt-4 w-[26rem] text-base/6 text-neutral-200">
                    7.5+ Tajribaga ega mutahasiss
                  </p>
                  <div className="mt-8 w-full">
                    <Button className="bg-slate-500 text-white w-[120px] h-[35px] rounded-full font-medium border-2 border-slate-300">
                      #Mobile
                    </Button>
                    <Button className="bg-slate-500 text-white mx-[15px] w-[120px] h-[35px] rounded-full font-medium border-2 border-slate-300">
                      #Android
                    </Button>
                  </div>
                </div>
              </WobbleCard>
            </CarouselItem>
            <CarouselItem className="text-white flex items-center justify-center">
                  <WobbleCard containerClassName="col-span-1 min-h-[300px] w-[400px] h-[500px] flex flex-col items-center justify-center text-center border-2 border-blue-500 md:max-w-[400px] ">
                    <div className="relative">
                      <img
                        src={expertlar.mukhammadkarim}
                        alt=""
                        className="rounded-full border-2 border-blue-500 w-[155px] mx-auto "
                      />
                      <div className="w-[40px] bg-gray-800 mx-auto rounded-full h-[40px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[115px] text-xl  "><h3 className="text-blue-500 font-bold mt-1 ">in</h3></div>
                     
                      </div>
                  
                    <h2 className="max-w-80 text-balance text-base md:text-2xl lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-5">
                    Mukhammadkarim Tukhtaboev
                    </h2>
                    <h1 className="text-white mt-3 text-2xl">
                    Senior Software Engineer
                    </h1>
                    <div className="">
                    <p className="mt-4 w-[26rem] text-base/6 text-neutral-200 ">
                    6.5+ Tajribaga ega mutahasiss
                    </p>
                   <div className="mt-8 w-full  ">
                   
                    <Button className="bg-slate-500 text-white  w-[120px] h-[35px] rounded-full font-medium border-2 border-slate-300">#Backend</Button>
                    <Button className="bg-slate-500 text-white mx-[15px] w-[120px] h-[35px] rounded-full font-medium border-2 border-slate-300">#.Net</Button>
                   </div>
                    </div>
                  </WobbleCard>
                </CarouselItem>
            
                <CarouselItem className="text-white flex items-center justify-center">
                  <WobbleCard containerClassName="col-span-1 min-h-[300px] w-[400px] h-[500px] flex flex-col items-center justify-center text-center border-2 border-blue-500 ">
                    <div className="relative">
                      <img
                        src={expertlar.shohzod}
                        alt=""
                        className="rounded-full border-2 border-blue-500 w-[155px] mx-auto "
                      />
                      <div className="w-[40px] bg-gray-800 mx-auto rounded-full h-[40px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[115px] text-xl  "><h3 className="text-blue-500 font-bold mt-1 ">in</h3></div>
                     
                      </div>
                  
                    <h2 className="max-w-80 text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white mx-auto mt-5">
                    Shahzod Tursunov
                    </h2>
                    <h1 className="text-white mt-3 text-2xl">
                    Senior Frontend Engineer
                    </h1>
                    <div className="">
                    <p className="mt-4 w-[26rem] text-base/6 text-neutral-200 ">
                    5+ Tajribaga ega mutahasiss
                    </p>
                   <div className="mt-8 w-full  ">
                   
                    <Button className="bg-slate-500 text-white  w-[120px] h-[35px] rounded-full font-medium border-2 border-slate-300">#VUE</Button>
                    <Button className="bg-slate-500 text-white mx-[15px] w-[120px] h-[35px] rounded-full font-medium border-2 border-slate-300">#Frontend</Button>
                   </div>
                    </div>
                  </WobbleCard>
                </CarouselItem>
            
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </div>
    </div>
  );
};

export default Hero;
