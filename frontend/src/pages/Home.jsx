import React from "react";

import { assets } from "../assets/assets";
import { TypeAnimation } from "react-type-animation";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return (
    <div className="bg-[rgba(42,112,56,0.65)] w-full  ">
   <div className="flex   lg:flex-row lg:items-center gap-5 ">
      <div className=" p-3 flex-1 text-center font-secondary lg:text-left max-w-[500px] ">
        <h1 className="text-[55px] font-bold leading-[0.8] lg:text-110px text-white mb-10">
        MOCKINT - <br /> <span className="text-[rgb(29,126,48)]">MOCK INTERVIEW</span> 
        </h1>

        <div className="mb-6 text-[20px]  font-secondary
          font-semibold uppercase leading-[1]">
        <span className=" text-white mr-4">Biz bilan</span>
              <TypeAnimation className='w-[35px]'
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

<p className="font-normal">SINOV INTERVYULAR TOPSHIRISH, BILIM VA TAJRIBANGIZNI SINASH, SHUNINGDEK TAJRIBALI DASTURCHILARDAN "FEEDBACK"LAR OLISH UCHUN MO’LJALLANGAN LOYIHA</p> 

        </div>
      </div>
     
      <div className="hidden lg:flex flex-1 w-[80%] ">
      <img className="" src={assets.hero_img} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Home;
