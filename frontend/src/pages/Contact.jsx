import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Calculate rotation based on mouse position
  const rotateX = (mousePosition.y / window.innerHeight - 0.5) * -30;
  const rotateY = (mousePosition.x / window.innerWidth - 0.5) * 30;

  return (
    <div className="h-auto min-h-[42rem]  bg-slate-900 flex flex-col items-center justify-center relative w-full px-4 py-10 md:py-20">
      <h2 className="relative z-10 text-2xl sm:text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex flex-col sm:flex-row items-center gap-2 md:gap-8 mt-10 md:mt-20">
        <span>Bizga Bo'glaning</span>
      </h2>

      {/* Mascot GIF (Rotates to Face the Mouse) */}
      <motion.img
        src={assets.monomoji}
        alt="Pink Sticker"
        className="w-24 h-24 sm:w-32 sm:h-32 mt-4"
        style={{
          transform: `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformOrigin: "center",
          willChange: "transform",
        }}
      />

      <div className="grid w-full max-w-lg gap-2 mt-6 px-4">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Savol va istaklaringizni yozing"
          className="w-full"
        />
        <Button className='bg-[#5a109b] text-white mt-3 w-full sm:w-auto'>Yuborish</Button>
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default Contact;