import React from "react";
import { assets } from "../assets/assets";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="bg-[rgba(42,112,56,0.65)] w-full min-h-screen flex items-center justify-center">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row lg:items-center items-center justify-center w-full max-w-[1200px] px-6 lg:px-10 py-8">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left max-w-[600px]">
          <h1 className="text-[45px] lg:text-[55px] font-bold leading-tight text-white mb-6">
            MOCKINT - <br />
            <span className="text-[rgb(29,126,48)]">MOCK INTERVIEW</span>
          </h1>

          <div className="text-[18px] lg:text-[20px] font-semibold uppercase leading-relaxed mb-6">
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
          </div>

          <p className="text-white text-[16px] lg:text-[18px] leading-relaxed">
            SINOV INTERVYULAR TOPSHIRISH, BILIM VA TAJRIBANGIZNI SINASH, SHUNINGDEK TAJRIBALI 
            DASTURCHILARDAN "FEEDBACK"LAR OLISH UCHUN MO’LJALLANGAN LOYIHA
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1  justify-center items-center hidden lg:flex">
          <img
            className="lg:w-[800px] object-contain"
            src={assets.hero_img}
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
