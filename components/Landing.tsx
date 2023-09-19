import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const landingPageAdjectives = [
  "amateur explorer",
  "community builder",
  "spikeball enthusiast",
];

const variants = {
  show: { opacity: 1, x: 0 },
  hide: { opacity: 0, x: "-100%" },
};

function Landing() {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef(null);
  
  let tailwindStyle = "relative flex h-screen w-full flex-col items-center justify-center"
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.3) {
      tailwindStyle = "relative flex h-screen w-full flex-col items-center justify-center bg-red-500"
    }
    else {
      tailwindStyle = "relative flex h-screen w-full flex-col items-center justify-center bg-green-400"

    }

    console.log("x changed to", latest)
  })

  useEffect(() => {
    console.log(tailwindStyle)
  }, [tailwindStyle]);

  console.log(scrollYProgress);
  return (
    <div
      id="welcome"
      className={tailwindStyle}
      ref={scrollRef}
    >
      <h1
        className="relative mb-32 font-title text-4xl lg:text-[100px]"
      >
        Hi! I&apos;m Sebastian
      </h1>
      <div className="flex flex-col justify-evenly lg:w-full lg:flex-row">
        {landingPageAdjectives.map((item, i) => (
          <motion.span
            initial={"hide"}
            animate={"show"}
            key={i}
            variants={variants}
            className="text-center font-sidenav text-[25px]"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Landing;
