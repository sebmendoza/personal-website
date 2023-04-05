import React, { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
// import Bookmark from "../assets/Bookmark.svg";

function MoreAboutMe() {
  const [showBook, setShowBook] = useState(false);

  return (
    <div className="relative h-screen pb-11">
      <Link
        href="/readingList"
        className="absolute left-[10%] top-[30%] -rotate-2 cursor-pointer rounded-2xl border-opacity-0 p-4 pr-16
     transition duration-100 ease-out hover:scale-[101%] hover:border-opacity-100
      "
        onMouseEnter={() => setShowBook(true)}
        onMouseLeave={() => setShowBook(false)}
      >
        <p className="w-[400px]  text-3xl">
          my reading list is a collection that has rekindled my love of books
        </p>
        <span className="absolute right-3 top-0">
          <motion.svg
            height="70"
            viewBox="0 0 93 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={showBook ? { pathLength: 1, pathOffset: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              d="M1.5 143.246V11.5C1.5 5.97715 5.97715 1.5 11.5 1.5H81.5C87.0229 1.5 91.5 5.97715 91.5 11.5V143.423C91.5 146.362 87.7127 147.548 86.0361 145.134L48.4913 91.0864C47.2904 89.3576 44.7289 89.3709 43.546 91.1121L6.98148 144.932C5.32107 147.376 1.5 146.201 1.5 143.246Z"
              stroke="black"
              stroke-width="3"
            />
          </motion.svg>
        </span>
      </Link>

      <div className="absolute right-[10%] top-[59%] cursor-pointer transition duration-100 ease-out hover:scale-[101%]">
        <p className="mid-sentence group w-[400px] rotate-2 pt-6 text-3xl transition-none duration-100 ease-out">
          here are some thought-out ideas
        </p>
      </div>

      <div className="absolute bottom-0 flex w-full flex-col items-center">
        <div>
          <p>
            shoot me an email or dm on linkedin :) always open to chat about new
            ideas, answer questions some questions, or take reccommendations
          </p>
        </div>
        <div className="my-14 flex justify-center gap-48">
          <span>@sebmen7</span>
          <span>sebastian.mendoza@uwaterloo.com</span>
          <span>sebmen</span>
        </div>
      </div>
    </div>
  );
}

export default MoreAboutMe;
