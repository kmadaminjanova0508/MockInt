import React from 'react'
import { BackgroundBeams } from "./ui/background-beams";
const Newsletter = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-3xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
         Bizga Bog'laning
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Bizning Feedback ilovamiz orqali so‘nggi yangiliklar, foydali maslahatlar va eksklyuziv takliflardan birinchilardan bo‘lib xabardor bo‘ling! O‘zingizning fikrlaringizni va tajribangizni baham ko‘rish orqali jamoamizni yanada kuchliroq qiling.Obuna bo‘ling va o‘z rivojlanishingiz uchun yangi imkoniyatlarni kashf eting. </p>
        <input
          type="text"
          placeholder="E-mail pochtangizni kiriting"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 h-[30px]  bg-neutral-950 placeholder:text-neutral-400 text-white placeholder:p-3"
        />
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default Newsletter