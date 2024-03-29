import React, { useState } from "react";
import { FaHandPeace, FaRegLaugh } from "react-icons/fa";
import { TiStopwatch } from "react-icons/ti";
import { useScroll, useMotionValueEvent } from "framer-motion";

function Sidenav() {
  const { scrollYProgress } = useScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
    document.getElementById("myBar")!.style.transform = `translateY(${
      -100 + scrollYProgress.get() * 100
    }%)`;
  });

  const checkIconToShow = (p: number) => {
    if (p < 0.33) {
      return <FaHandPeace />;
    } else if (p < 0.66) {
      return <TiStopwatch />;
    } else {
      return <FaRegLaugh />;
    }
  };

  const sideNavItems = [
    { title: "welcome", scrollTo: "#welcome" },
    { title: "things I spend time on", scrollTo: "#spendTimeOn" },
    { title: "more about me", scrollTo: "#moreAboutMe" },
  ];

  return (
    <div className="fixed z-50 hidden min-h-screen w-20 flex-col items-center justify-around font-sidenav lg:flex">
      {sideNavItems.map((item, i) => (
        <div
          key={i}
          className="relative my-3 flex h-1/3 w-[40px] items-center justify-center whitespace-nowrap"
        >
          <span className="-rotate-90 cursor-pointer text-2xl">
            <a href={item.scrollTo}>{item.title}</a>
          </span>
        </div>
      ))}

      <div
        id="myBar"
        className={`absolute -right-1 top-0 flex h-screen w-2 -translate-y-[100%] transform justify-center bg-green-900 transition-[height] ease-in-out`}
      >
        <div className="shadow-5xl absolute bottom-0 flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-green-900 bg-white text-stone-700">
          {checkIconToShow(scrollYProgress.get())}
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
