import React from "react";
import { assets, hamkorlar } from "../assets/assets";
import { Boxes } from "./ui/background-boxes";

const Sponsors = () => {
  return (
    <div className="bg-gray-300 w-full h-[380px] relative">
      
      <div className="w-full flex-col justify-center text-center relative ">
        <h1 className="pt-[60px] lg:pt-[100px] text-3xl text-slate-900 font-extrabold">Hamkorlarimiz</h1>
        <div className=" flex flex-wrap justify-center gap-10 mt-10 px-4">
        <img src={hamkorlar.robocode} alt="" />
        <img src={hamkorlar.webbrain} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
