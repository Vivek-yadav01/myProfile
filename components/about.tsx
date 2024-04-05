"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { TextGenerateEffect } from "./textgeneration";
const words = `Hey, I'm Vivek, an aspiring full-stack developer passionate about coding
        and problem-solving. Currently exploring front-end and back-end
        technologies, my portfolio reflects my early projects and my enthusiasm
        for this field. Excited about what's to come, I'm ready to dive into new
        challenges Let's make some magic happen!`;

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className=" bg-gray-100  dark:bg-transparent flex flex-col mb-28  sm:w-[80vw] w-[90vw] text-center leading-8 sm:mb-40 scroll-mt-28 border-[1px] border-black-800 dark:border-white-50 p-8 rounded-[10px]  "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.001 }}
      id="about"
    >
      <SectionHeading>Vivek Yadav</SectionHeading>

      <TextGenerateEffect words={words} />
      <a
        href="example.pdf"
        download
        className="border-[1.5px] border-gray-300 dark:border-white-50 rounded-full px-[1rem]   self-start"
      >
        Download CV
      </a>
    </motion.section>
  );
}
