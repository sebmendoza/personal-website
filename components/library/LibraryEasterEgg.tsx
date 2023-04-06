import React, { useState } from "react";
import { motion } from "framer-motion";

type MousePosition = {
  mouseX: number;
  mouseY: number;
};

const fancyWord = [
  "coterie",
  "copious",
  "didactic",
  "ephemeral",
  "eschew",
  "fastidious",
  "fecundity",
  "flotsam",
  "jetsam",
  "parsimonious",
  "zenith",
];

function LibraryEasterEgg() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    mouseX: 0,
    mouseY: 0,
  });
  const [wordIndex, setWordIndex] = useState(0);
  const [oldMousePosition, setOldMousePosition] = useState<MousePosition>({
    mouseX: 0,
    mouseY: 0,
  });

  const distanceFromOld = (x: number, y: number) => {
    const a = x - oldMousePosition.mouseX;
    const b = y - oldMousePosition.mouseY;
    return Math.sqrt(a * a + b * b);
  };

  const getCoordinates = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const x = event.pageX - 16;
    const y = event.pageY - 16;
    return {
      mouseX: x,
      mouseY: y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition(getCoordinates(e));
    if (distanceFromOld(mousePosition.mouseX, mousePosition.mouseY) > 90) {
      setWordIndex(wordIndex + 1);
      setOldMousePosition(mousePosition);
    }
  };
  return (
    <div className="relative my-10">
      <div
        className="relative hidden h-64 cursor-crosshair overflow-hidden rounded-lg border-2 opacity-0 transition duration-300 ease-in hover:opacity-100 lg:block"
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <motion.div
          className="fixed left-0 top-0 font-sidenav text-4xl"
          animate={{
            x: mousePosition.mouseX,
            y: mousePosition.mouseY,
          }}
        >
          {fancyWord[wordIndex % fancyWord.length]}
        </motion.div>
        <p className="absolute bottom-1 left-2 font-body text-sm">
          a collection of cool words I&apos;ve jotted down
        </p>
      </div>
    </div>
  );
}

export default LibraryEasterEgg;
