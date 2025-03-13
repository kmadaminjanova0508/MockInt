"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { Button } from "./ui/moving-border";

import { motion } from "framer-motion";

export function AnimatedModalDemo() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    telegram: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Modal>
        <ModalTrigger
          className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-slate-500 px-8 py-2 bg-[#ffffff] hover:text-white rounded-md text-black font-light transition duration-200 ease-linear "
        >
          <span className="text-center">Interviewdan o'tish</span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-2xl font-bold text-neutral-800 text-center">
              Adminga Bog'lanning
            </h4>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4">
              Iltimos quyidagi <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200 text-neutral-800">ma’lumotlarni</span> bering:
            </h4>
            <div className="flex flex-col gap-3 px-8  ">
              <input type="text" name="name" placeholder="Ismingiz" value={formData.name} onChange={handleChange} className="px-3 py-2 border rounded-md " />
              <input type="text" name="surname" placeholder="Familyangiz" value={formData.surname} onChange={handleChange} className="px-3 py-2 border rounded-md" />
              <input type="text" name="telegram" placeholder="Telegram usernamengiz" value={formData.telegram} onChange={handleChange} className="px-3 py-2 border rounded-md" />
              <input type="text" name="phone" placeholder="Telefon raqamingiz" value={formData.phone} onChange={handleChange} className="px-3 py-2 border rounded-md" />
              <input type="email" name="email" placeholder="Gmail manzilingiz" value={formData.email} onChange={handleChange} className="px-3 py-2 border rounded-md" />
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Bekor qilish
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Bog'lanish
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
