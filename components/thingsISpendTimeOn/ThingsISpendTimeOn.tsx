import React, { useState, useRef } from "react";
import { timeDescriptions } from "../../data/timeDescriptions";
import Card from "./Card";
import {
  motion,
  LayoutGroup,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const MenuItem = ({
  text,
  selected,
  onClick,
}: {
  text: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <motion.div
    onClick={onClick}
    animate={{ opacity: selected ? 1 : 0.5 }}
    className="relative mx-3 my-0 cursor-pointer font-title text-3xl lg:mx-12"
  >
    {text}
    {selected && (
      <motion.div
        className="absolute bottom-0 top-full h-0.5 w-full rounded-xl bg-black opacity-80"
        layoutId="underline"
      />
    )}
  </motion.div>
);

function ThingsISpendTimeOn() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  // this was making my website bug out hard - will come back to this
  // const drawRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: drawRef,
  //   offset: ["start start", "end end"],
  // });

  return (
    <div className="relative h-screen" id="spendTimeOn">
      <div>
        {/* <svg
          className="relative -top-12 w-full"
          viewBox="0 0 694 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            // ref={drawRef}
            // initial={{ pathLength: 0 }}
            // // style={{ pathLength: scrollYProgress }}
            d="M1 184C1 184 86.5 89.5 107 97C127.5 104.5 116.5 158 148 184C179.5 210 276 39.5 302 61.5C328 83.5 328.5 145.5 363.5 169.5C398.5 193.5 521 24.5 545.5 39.5C570 54.5 581 135.5 605 152.5C629 169.5 753.5 0.5 753.5 0.5"
            stroke="black"
          />
        </svg> */}
        <p className="text mt-6 px-4 text-center font-body lg:max-w-none lg:px-0 lg:pl-10 lg:text-left lg:text-xl">
          As an explorer, I try doing something different each day. Over the
          last couple years, most of my time has gone towards exploring
          everything I find interesting in tech. In university, I&apos;ve
          completed a couple internships and pushed my creativity with coding
          and design.
        </p>
      </div>
      <div className="my-24 max-w-full lg:pl-10">
        <div className="mb-4 flex justify-evenly lg:justify-start">
          <LayoutGroup>
            {timeDescriptions.map((item, index) => (
              <MenuItem
                text={item.title}
                key={index}
                selected={selectedMenuItem === index}
                onClick={() => {
                  setSelectedMenuItem(index);
                }}
              />
            ))}
          </LayoutGroup>
        </div>

        <div className="flex space-x-7 overflow-x-scroll p-4 scrollbar-hide">
          {timeDescriptions[selectedMenuItem].experiences.map(
            (item: any, index: number) => {
              return (
                <Card
                  title={item.company}
                  key={item.key}
                  year={item.year}
                  description={item.description}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default ThingsISpendTimeOn;
