"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3dcard";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function ThreeDCardDemo() {
  const { ref } = useSectionInView("Projects");
  return (
    <section className="scroll-mt-28" ref={ref} id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex gap-2 flex-wrap  justify-center">
        {projectsData.map((elt) => (
          <CardContainer className="inter-var dark:shadow-white dark:shadow-inner rounded-[10px] shadow-black shadow-2xl   ">
            <CardBody className="bg-gray-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto sm:h-[34rem] rounded-xl p-6  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {elt.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 sm:h-[4rem] h-auto "
              >
                {elt.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4 mb-[2rem]">
                <Image
                  src={elt.imageUrl}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="sm:h-[4rem] h-auto">
                <ul className="flex flex-wrap gap-2 sm:mt-auto ">
                  {elt.tags.map((tag, index) => (
                    <li
                      className="bg-black/[0.7] dark:bg-transparent  px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full border-[0.1px] dark:border-white   dark:text-white"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center mt-2">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
