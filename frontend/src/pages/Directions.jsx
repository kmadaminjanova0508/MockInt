
import { HoverEffect } from "../components/ui/card-hover-effect";
import { assets } from '@/assets/assets';
import { motion, useScroll, useTransform } from "framer-motion";
const Directions = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  return (
    <div className="bg-slate-900 w-full h-auto  relative overflow-hidden items-center justify-center ">
    <div className="max-w-5xl mx-auto px-8 mt-[150px] bg-gray-900 min-h-screen text-white">
    <h1 className="text-center text-4xl  font-extrabold text-gray-300">Yo'nalishlar</h1>
    <motion.h1
     style={{
     opacity: opacity,
    translateY: translateY,
    }}
      className="text-center text-white text-2xl font-bold mb-10 pt-10  ">
      O’ZINGIZGA MOS YO’NALISHNI TANLAB, BILIMINGIZNI SINAB KO’RING
      </motion.h1>
    <HoverEffect items={projects} />
  </div>
  </div>
  )
}

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export default Directions