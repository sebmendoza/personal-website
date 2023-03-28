import React, { useEffect, useState } from "react";
import { FaHandPeace, FaRegLaugh } from "react-icons/fa";
import { TiStopwatch } from "react-icons/ti";

function Sidenav() {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  // useEffect(() => {
  //   const handlePercentage = () => {
  //     // const newPercentage =
  //     //   (document.documentElement.scrollTop + document.body.scrollTop) /
  //     //   (document.documentElement.scrollHeight -
  //     //     document.documentElement.clientHeight);
  //     const winScroll = document.documentElement.scrollTop;
  //     const height =
  //       document.documentElement.scrollHeight -
  //       document.documentElement.clientHeight;
  //     const scrolled = (winScroll / height) * 100;

  //     if (scrolled !== undefined) {
  //       setScrollPercentage(scrolled);
  //     }

  //     console.log(scrollPercentage);
  //   };

  //   var path = document.querySelector("#helloWorld");
  //   var pathLength = path?.getTotalLength();
  //   console.log(path);
  //   console.log(pathLength);

  //   path.style.strokeDasharray = pathLength + " " + pathLength;

  //   // Make very long dashes (the length of the path itself)
  //   path.style.strokeDasharray = pathLength + " " + pathLength;

  //   // Offset the dashes so the it appears hidden entirely
  //   path.style.strokeDashoffset = pathLength;

  //   // Jake Archibald says so
  //   // https://jakearchibald.com/2013/animated-line-drawing-svg/
  //   path.getBoundingClientRect();

  // When the page scrolls...
  // window.addEventListener("scroll", handlePercentage);
  // function (e) {
  // What % down is it?
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  // scrollPercentage =
  //   (document.documentElement.scrollTop + document.body.scrollTop) /
  //   (document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight);
  // console.log(scrollPercentage * 100);
  //     // Length to offset the dashes
  //     var drawLength = pathLength * scrollPercentage;

  //     // Draw in reverse
  //     path.style.strokeDashoffset = pathLength - drawLength;

  //     // When complete, remove the dash array, otherwise shape isn't quite sharp
  //     // Accounts for fuzzy math
  //     if (scrollPercentage >= 0.99) {
  //       path.style.strokeDasharray = "none";
  //     } else {
  //       path.style.strokeDasharray = pathLength + " " + pathLength;
  //     }
  // });
  //   return () => {
  //     window.removeEventListener("scroll", handlePercentage);
  //   };
  // }, [scrollPercentage]);

  // https://www.w3schools.com/howto/howto_js_scroll_indicator.asp

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
    <div className="fixed z-50 flex h-screen w-20 flex-col items-center justify-around font-Gaya">
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
