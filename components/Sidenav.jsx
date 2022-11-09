import React, { useEffect } from "react";

function Sidenav() {
  useEffect(() => {
    var path = document.querySelector("#helloWorld");
    var pathLength = path?.getTotalLength();
    console.log(path);
    console.log(pathLength);

    path.style.strokeDasharray = pathLength + " " + pathLength;

    // Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = pathLength + " " + pathLength;

    // Offset the dashes so the it appears hidden entirely
    path.style.strokeDashoffset = pathLength;

    // Jake Archibald says so
    // https://jakearchibald.com/2013/animated-line-drawing-svg/
    path.getBoundingClientRect();

    // When the page scrolls...
    window.addEventListener("scroll", function (e) {
      // What % down is it?
      // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
      // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
      var scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      // Length to offset the dashes
      var drawLength = pathLength * scrollPercentage;

      // Draw in reverse
      path.style.strokeDashoffset = pathLength - drawLength;

      // When complete, remove the dash array, otherwise shape isn't quite sharp
      // Accounts for fuzzy math
      if (scrollPercentage >= 0.99) {
        path.style.strokeDasharray = "none";
      } else {
        path.style.strokeDasharray = pathLength + " " + pathLength;
      }
    });
  }, []);

  return (
    <div className="fixed flex h-screen w-20 flex-col justify-around border-r-4 border-r-gray-900 border-opacity-60 bg-slate-300">
      {/* <svg
        width="100%"
        height="100%"
        viewBox="0 0 78 976"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="helloWorld"
          d="M2 0V226.5C1.83333 235.833 7.2 254.5 30 254.5C52.8 254.5 62.8333 235.833 65 226.5V90C65 90 65 69.5 65 66C65 62.5 60.9888 58.8741 56.5 57.5C48.0505 54.9134 40.5 60.3 40.5 73.5C40.5 86.7 40 281 40.5 289.5C41 298 56.5 298 56.5 305.5C56.5 313 56 378.5 56 412.5M56 412.5C56.6143 413.114 55.4085 411.986 56 412.5ZM56 412.5C66.578 421.697 73.7902 411.577 76 407C74.3333 404 73.7 398 70.5 398C66.5 398 56 402.191 56 412.5ZM56 412.5L56.5 548C57 552.667 54.9 562 42.5 562C30.1 562 17.3333 562 12.5 562C11.3333 562.167 9 563.1 9 565.5C9 568.5 7.5 578.5 9 577C10.2 575.8 31.8333 576.5 42.5 577C47.1667 576.5 56.5 578.6 56.5 591C56.5 603.4 56.5 683.833 56.5 722.5C57.5 727.167 56.1 736.5 42.5 736.5C25.5 736.5 12.5 759.5 12.5 766.5C12.5 772.1 12.5 852.167 12.5 891.5C12.8333 896.667 16.4 907 28 907C39.6 907 53.5 907 59 907C61.5 929.333 65 974 59 974"
          stroke="#D17F7F"
          stroke-width="3"
        />
      </svg> */}
      <div className="h-full pl-1">
        <svg
          className="h-full "
          viewBox="0 0 78 1000"
          preserveAspectRatio="xMinYMin meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="helloWorld"
            d="M1.5 0V224.5C1.66667 234 7.6 253 30 253C58 253 61.5 238 61.5 221.5C61.5 208.3 61.5 117.333 61.5 73.5C61.8333 69.1667 59.7 60.5 48.5 60.5C37.3 60.5 35.1667 69.1667 35.5 73.5V272C43 272.167 58 276.9 58 294.5C58 312.1 58 365.5 58 390V415C58.1667 417.833 60.1 423.5 66.5 423.5C74.5 423.5 75 423 75 415C75 407 75 406.5 66.5 406.5C59.7 406.5 56.3333 421.833 55.5 429.5V546C55.8333 550.5 53.6 559.5 42 559.5C30.4 559.5 19.8333 559.5 16 559.5C13 559 7 560.1 7 568.5C7 576.9 12.3333 577.333 15 576.5H42C46.5 576.333 55.5 578.8 55.5 590C55.5 601.2 55.5 681.333 55.5 720C56.3333 725.333 54.3 736 39.5 736C24.7 736 14.3333 755 11 764.5V885C10.6667 891.833 14.3 905.5 31.5 905.5C48.7 905.5 53.3333 920.167 53.5 927.5V992"
            stroke="#D17F7F"
            stroke-width="3"
          />
        </svg>
      </div>

      <h2 className="absolute top-[13%] left-0 right-0 -rotate-90 cursor-pointer text-2xl">
        welcome
      </h2>
      <h2 className="absolute top-[61%] left-0 right-0 -rotate-90 cursor-pointer whitespace-nowrap text-2xl">
        things I spend time on
      </h2>
      <h2 className="absolute top-[92%] right-0 left-0 -rotate-90 cursor-pointer whitespace-nowrap text-2xl">
        more about me
      </h2>
    </div>
  );
}

export default Sidenav;
