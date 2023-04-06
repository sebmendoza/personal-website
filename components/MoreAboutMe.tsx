import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaTwitter, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import { motion, useInView } from "framer-motion";

const contacts = [
  {
    icon: <FaTwitter />,
    username: "@sebmen7",
    link: "https://twitter.com/sebmen7",
  },
  {
    icon: <FaLinkedin />,
    username: "sebmendoza",
    link: "https://www.linkedin.com/in/sebastian-mendoza-331910206/7",
  },
  {
    icon: <FaGithub />,
    username: "sebmendoza",
    link: "https://github.com/sebmendoza",
  },
];

function MoreAboutMe() {
  const [showBook, setShowBook] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="relative flex flex-col items-center gap-6 lg:block lg:h-screen">
      <Link
        href="/readingList"
        className="relative max-w-[300px] cursor-pointer rounded-xl p-4 transition duration-100 ease-out hover:scale-[101%]  lg:absolute lg:left-[10%] lg:top-[30%]
     lg:max-w-none lg:-rotate-2 lg:pr-16"
        onMouseEnter={() => setShowBook(true)}
        onMouseLeave={() => setShowBook(false)}
      >
        <p className="font-sidenav text-xl lg:w-[400px] lg:text-3xl">
          my <span className="underline lg:no-underline">reading list</span> is
          a collection that has rekindled my love of books
        </p>
        <span className="absolute right-3 top-0 hidden lg:block">
          <motion.svg
            height="70"
            viewBox="0 0 93 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              ref={ref}
              whileInView={{ pathLength: 1, pathOffset: 0 }}
              initial={{ pathLength: 1, pathOffset: 1 }}
              animate={showBook ? { pathLength: 1, pathOffset: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              d="M1.5 143.246V11.5C1.5 5.97715 5.97715 1.5 11.5 1.5H81.5C87.0229 1.5 91.5 5.97715 91.5 11.5V143.423C91.5 146.362 87.7127 147.548 86.0361 145.134L48.4913 91.0864C47.2904 89.3576 44.7289 89.3709 43.546 91.1121L6.98148 144.932C5.32107 147.376 1.5 146.201 1.5 143.246Z"
              stroke="black"
              strokeWidth="3"
            />
          </motion.svg>
        </span>
      </Link>

      <div className="relative cursor-pointer transition duration-100 ease-out lg:absolute lg:right-[10%] lg:top-[50%] lg:hover:scale-[101%]">
        <p className="mid-sentence group pt-6 font-sidenav text-xl transition-none duration-100 ease-out lg:w-[400px] lg:rotate-2 lg:text-3xl">
          here are some thought-out
          <span className="underline lg:no-underline"> ideas</span>
        </p>
      </div>

      <div className="relative mt-5 flex w-full flex-col items-center font-body lg:absolute lg:bottom-0">
        <p className="mx-4 text-center">
          always open to chat about new ideas, offer feedback, or run
          intramurals :)
        </p>

        <div className="my-14 flex justify-center gap-8">
          {contacts.map((item, i) => (
            <Link href={item.link} key={i} className="flex items-center gap-1">
              {item.icon}
              <span className="hidden lg:inline">{item.username}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoreAboutMe;
