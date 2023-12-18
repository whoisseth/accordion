/** @format */

import Image from "next/image";
import destktopbg from "@/assets/images/background-pattern-desktop.svg";
import mobilebg from "@/assets/images/background-pattern-mobile.svg";
import starIcon from "@/assets/images/icon-star.svg";
import Accordion from "./components/Accordion";
import { faqs } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen relative p-4 pb-10 bg-purple-100">
      <BackgroundImage />

      <section className="relative bg-white transition-all mx-auto  max-w-xs sm:max-w-2xl rounded-lg flex flex-col gap-4 mt-40 sm:mt-24 p-5">
        <h1 className="flex gap-3 items-center">
          {/* image */}
          <Image src={starIcon} alt="star-icon" className=" h-6  w-auto" />
          <span className="font-bold text-4xl">FAQs</span>
        </h1>
        <div className="flex flex-col gap-4 divide-y">
          {faqs.map((d, i) => (
            <Accordion
              answer={d.answer}
              question={d.question}
              isAccordionOpen={d.isAccordionOpen}
              key={i}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function BackgroundImage() {
  return (
    <div className="w-full h-auto absolute top-0 left-0">
      <Image
        src={destktopbg}
        alt="destktop-bg"
        className="w-full h-full object-cover hidden md:block "
      />
      <Image
        src={mobilebg}
        alt="mobile-bg"
        className="w-full h-full object-cover md:hidden "
      />
    </div>
  );
}
