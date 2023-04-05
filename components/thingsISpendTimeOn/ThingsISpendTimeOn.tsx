import React, { useEffect, useState } from "react";
import {
  workDescriptions,
  codeDescriptions,
  designDescriptions,
} from "../../data/tistoDescriptions";
import Cards from "./Cards";
import Lamp from "./Lamp";
import { motion, LayoutGroup } from "framer-motion";

const menuItems = [
  {
    title: "work",
    description: workDescriptions,
  },
  {
    title: "code",
    codeDescriptions,
    description: codeDescriptions,
  },
  {
    title: "design",
    description: designDescriptions,
  },
];

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
    className="relative my-0 mx-12 cursor-pointer text-2xl"
  >
    {text}
    {selected && (
      <motion.div
        className="absolute top-full bottom-0 h-0.5 w-full rounded-xl bg-black opacity-80"
        layoutId="underline"
      />
    )}
  </motion.div>
);

function ThingsISpendTimeOn() {
  const [sectors, setSectors] = useState<any[] | null>(workDescriptions);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  return (
    <div className="relative h-screen">
      {/* the wrapper for the content */}
      <div className="absolute top-[40%] max-w-full  pl-10">
        <div>
          <div>{/* <Lamp /> */}</div>
          <div className="space-evenly flex">
            <LayoutGroup>
              {menuItems.map((item, index) => (
                <MenuItem
                  text={item.title}
                  key={index}
                  selected={selectedMenuItem === index}
                  onClick={() => {
                    setSelectedMenuItem(index);
                    setSectors(item.description);
                  }}
                />
              ))}
            </LayoutGroup>
          </div>
        </div>
        {/* cards
         */}
        <div className="mt-10 flex space-x-7 overflow-x-scroll p-4 scrollbar-hide">
          {sectors?.map((item: any, index: number) => {
            return (
              <Cards
                title={item.company}
                key={item.key}
                year={item.year}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ThingsISpendTimeOn;
