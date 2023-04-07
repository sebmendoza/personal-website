import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  const [showAdj, setShowAdj] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return (
    <div
      id="welcome"
      className="relative flex h-screen w-full flex-col items-center justify-center"
    >
      <h1
        className="relative mb-32 font-title text-4xl lg:text-[100px]"
        onMouseEnter={() => setShowAdj(true)}
      >
        Hi! I&apos;m Sebastian
      </h1>
      <div className="flex flex-col justify-evenly lg:w-full lg:flex-row">
        {landingPageAdjectives.map((item, i) => (
          <motion.span
            initial={"hide"}
            animate={showAdj || isMobile ? "show" : "hide"}
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
