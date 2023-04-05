import React, { useState } from "react";
import { motion } from "framer-motion";

const landingPageAdjectives = [
  "amateur explorer",
  "communtiy builder",
  "spikeball enthusiast",
];
const variants = {
  show: { opacity: 1, x: 0 },
  hide: { opacity: 0, x: "-100%" },
};

function Landing() {
  const [showAdj, setShowAdj] = useState(false);
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center font-Display">
      <h1
        className="relative mb-3 text-[150px]"
        onMouseEnter={() => setShowAdj(true)}
      >
        Hi! I&apos;m Sebastian
      </h1>
      <div className="flex w-full justify-evenly">
        {landingPageAdjectives.map((item, i) => (
          <motion.span
            animate={showAdj ? "show" : "hide"}
            key={i}
            variants={variants}
            className="text-[25px]"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Landing;
