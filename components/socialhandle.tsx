"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltips";
import { SocialIcon } from "react-social-icons";
const people = [
  {
    id: 1,
    name: "LinkedIn",
    designation: "Professional Profile",
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.linkedin.com/in/vivek-yadav-a175a1259/",
  },
  {
    id: 2,
    name: "Instagram",
    designation: "Personal Profile",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.instagram.com/vivek_ydv99/",
  },
  {
    id: 3,
    name: "Github",
    designation: "Projects",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://github.com/Vivek-yadav01",
  },
  //   {
  //     id: 4,
  //     name: "Leetcode",
  //     designation: "DSA",
  //     image:
  //       "",
  //   },
  //   {
  //     id: 5,
  //     name: "GFG",
  //     designation: "DSA",
  //     image:
  //       "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png",
  //   },
  //   {
  //     id: 6,
  //     name: "Dora",
  //     designation: "The Explorer",
  //     image:
  //       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  //   },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row  mb-10 w-full fixed z-[1000] bottom-0 left-0">
      <AnimatedTooltip items={people} />
    </div>
  );
}
