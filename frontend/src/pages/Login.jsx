"use client";

import React, { lazy, Suspense } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Vortex } from "@/components/ui/vortex";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import WorldMap from "@/components/ui/world-map";

const World = lazy(() => import("../components/ui/globe").then((m) => ({ default: m.World })));

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* World Map (Hidden on small screens) */}
      <div className="absolute inset-0 hidden lg:block">
        <WorldMap
          dots={[
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
          ]}
        />
      </div>

      {/* Form Container */}
      <div className="relative bg-gray-900 bg-opacity-80 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-lg max-w-sm sm:max-w-md w-full mx-4 md:mx-auto">
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">Mockintga Hush kelibsiz!</h2>
        <p className="text-neutral-300 text-center mt-3 text-sm sm:text-base">
          Davom etirish uchun platformamizda akaunt yarating
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label className="text-white" htmlFor="firstname">Ism</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-white" htmlFor="lastname">Familiya</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-white" htmlFor="email">Elektron Pochta</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-white" htmlFor="password">Parol</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all">
            Kirish &rarr;
          </button>
        </form>
      </div>
    </div>
  );
};

const LabelInputContainer = ({ children, className }) => (
  <div className={`flex flex-col space-y-2 w-full ${className}`}>{children}</div>
);

export default Login;
