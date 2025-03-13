import React, { useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const faqData = [
  { question: "What is a pseudo-class?", answer: "A CSS pseudo-class is a keyword added to a selector that lets you style a specific state of the selected element(s)." },
  { question: "What is a pseudo-element?", answer: "A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, ::first-line can be used to change the font of the first line of a paragraph." },
  { question: "What are CSS selectors?", answer: "The CSS selectors module defines patterns to select elements to which a set of CSS rules are applied along with their specificity." },
  { question: "What is anchor-positioning?", answer: "The CSS anchor positioning module defines features that allow you to tether elements together." },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-auto min-h-[42rem] bg-slate-900 flex flex-col items-center justify-center relative w-full px-4 py-10 md:py-20">
      <h2 className="relative z-10 text-2xl sm:text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex flex-col sm:flex-row items-center gap-2 md:gap-8 mt-10 md:mt-20">
        <span>Eng ko'p beriladigan savollar</span>
      </h2>

      {/* Accordion Section */}
      <div className="w-full max-w-2xl mt-10">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="w-full text-left text-white flex justify-between items-center p-4 bg-gray-800 hover:bg-gray-700 relative"
              onClick={() => toggleAccordion(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-expanded={openIndex === index}
            >
              {item.question}
              <span className={`transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
              {/* Tag appears on hover & open */}
              <span className={`absolute right-10 text-xs px-2 py-1 rounded bg-gray-300 text-black transition-opacity ${hoveredIndex === index || openIndex === index ? "opacity-100" : "opacity-0"}`}>
                {openIndex === index ? "Close" : "Open"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px] p-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-300">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default Faq;
