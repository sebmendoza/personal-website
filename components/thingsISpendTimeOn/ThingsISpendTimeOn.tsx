import React, { useEffect, useState } from "react";
import {
  workDescriptions,
  codeDescriptions,
  designDescriptions,
} from "../../data/tistoDescriptions";
import Cards from "./Cards";
import Lamp from "./Lamp";

function ThingsISpendTimeOn() {
  const [sectors, setSectors] = useState<any[] | null>(workDescriptions);

  const changeSectors = (input: any[]) => {
    setSectors(input);
    console.log(sectors);
  };

  return (
    <div className="relative h-screen">
      {/* the wrapper for the content */}
      <div className="absolute top-[40%] max-w-full  pl-10">
        {/* headings */}
        <div>
          <div>
            <Lamp />
          </div>
          <div className="ml-32 flex space-x-16 text-2xl">
            <h3
              onClick={() => changeSectors(workDescriptions)}
              className="cursor-pointer"
            >
              work
            </h3>
            <h3
              onClick={() => changeSectors(codeDescriptions)}
              className="cursor-pointer"
            >
              code
            </h3>
            <h3
              onClick={() => changeSectors(designDescriptions)}
              className="cursor-pointer"
            >
              design
            </h3>
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
