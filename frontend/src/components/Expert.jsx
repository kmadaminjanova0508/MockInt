import React from 'react';
import { WobbleCard } from "../components/ui/wobble-card";
import { expertlar } from "../assets/assets";
import { Button } from "@/components/ui/button";

const experts = [
  {
    name: "Abrorxo'ja Yodgorov",
    role: "Lead Android Engineer",
    experience: "7.5+ Tajribaga ega mutahasiss",
    image: expertlar.abrorhoja,
    tags: ["#Mobile", "#Android"],
  },
  // Add more expert objects as needed
];

const Expert = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-[120px]">
          <h1 className="text-center text-4xl  font-extrabold text-gray-300 mb-20">Mutaxassislar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
        {experts.map((expert, index) => (
          <WobbleCard
            key={index}
            containerClassName="col-span-1 min-h-[250px] w-[300px] h-[400px] flex flex-col items-center justify-center text-center border-2 border-blue-500"
          >
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="rounded-full border-2 border-blue-500 w-[120px] mx-auto"
              />
              <div className="w-[30px] bg-gray-800 mx-auto rounded-full h-[30px] items-center border-2 border-blue-500 absolute right-0 left-[23%] top-[90px] text-sm">
                <h3 className="text-blue-500 font-bold mt-1">in</h3>
              </div>
            </div>

            <h2 className="max-w-64 text-balance text-sm md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-white mx-auto mt-4">
              {expert.name}
            </h2>
            <h1 className="text-white mt-2 text-lg">{expert.role}</h1>
            <p className="mt-3 w-[20rem] text-sm text-neutral-200">
              {expert.experience}
            </p>
            <div className="mt-6 w-full flex justify-center gap-2">
              {expert.tags.map((tag, idx) => (
                <Button key={idx} className="bg-slate-500 text-white w-[90px] h-[30px] rounded-full text-xs border-2 border-slate-300">
                  {tag}
                </Button>
              ))}
            </div>
          </WobbleCard>
        ))}
      </div>
    </div>
  );
};

export default Expert;
