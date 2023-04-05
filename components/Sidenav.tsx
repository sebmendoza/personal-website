import React, { useEffect, useState } from "react";
import { FaHandPeace, FaRegLaugh } from "react-icons/fa";
import { TiStopwatch } from "react-icons/ti";

function Sidenav() {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    function myFunction() {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollPercentage((winScroll / height) * 100);
      if (scrollPercentage > 100) {
        setScrollPercentage(120);
      }
      document.getElementById("myBar")!.style.transform = `translateY(${
        -100 + scrollPercentage
      }%)`;
    }
    window.onscroll = function () {
      myFunction();
    };
  }, [scrollPercentage]);

  const checkWhichIconToShow = (p: number) => {
    if (p < 33) {
      return <FaHandPeace />;
    } else if (p < 66) {
      return <TiStopwatch />;
    } else {
      return <FaRegLaugh />;
    }
  };

  return (
    <div className="fixed z-50 flex min-h-screen w-20 flex-col items-center justify-around font-Gaya">
      {/* <div className="absolute top-0 bottom-0  left-0 right-0 flex w-[100vh] -rotate-90 flex-row-reverse justify-around bg-white"> */}

      <div className="relative my-3 flex h-1/3 w-[40px] items-center justify-center whitespace-nowrap">
        <span className="-rotate-90 cursor-pointer text-3xl">welcome</span>
      </div>

      <div className="relative my-3 flex h-1/3 w-[40px] items-center justify-center whitespace-nowrap">
        <span className="-rotate-90 cursor-pointer text-3xl">
          things I spend time on
        </span>
      </div>

      <div className="relative my-3 flex h-1/3 w-[40px] items-center justify-center whitespace-nowrap">
        <span className="-rotate-90 cursor-pointer text-3xl">
          more about me
        </span>
      </div>

      <div
        id="myBar"
        className={`absolute -right-1 top-0 flex h-screen w-2 -translate-y-[100%] transform justify-center rounded-xl bg-stone-700 transition-[height] ease-in-out`}
      >
        <div className="shadow-5xl absolute bottom-0 flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-stone-700/75 bg-white text-stone-700">
          {checkWhichIconToShow(scrollPercentage)}
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
