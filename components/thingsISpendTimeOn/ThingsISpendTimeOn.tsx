import React, { useEffect, useState } from "react";
import { timeDescriptions } from "../../data/timeDescriptions";
import Card from "./Card";
import { motion, LayoutGroup } from "framer-motion";

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

  return (
    <div className="relative h-screen">
      <div className="absolute top-12 max-w-full lg:top-[40%] lg:pl-10">
        <div className="flex justify-evenly lg:justify-start">
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

        <div className="mt-10 flex space-x-7 overflow-x-scroll p-4 scrollbar-hide">
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
