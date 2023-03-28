import React, { useEffect } from "react";
import KUTE from "kute.js";

function Lamp() {
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#hello",
      { path: "#hello" },
      { path: "#world" },
      { duration: 3000 }
    );
    tween.start();
    //   //   const newKute = new KUTE.ComponentsBase();
    //   //   const NewTween = tween
    //   console.log(KUTE);
    // var tween = KUTE.fromTo(
    //   "#rectangle",
    //   { path: "#rectangle" },
    //   { path: "#star" },
    //   { duration: 2000 }
    // );

    // tween.start();
  }, []);

  return (
    <div>
      <svg className="pl-32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 0L75 6.69873L93.3013 25L100 50L93.3013 75L75 93.3013L50 100L25 93.3013L6.69873 75L0 50L6.69873 25L25 6.69873L50 0Z"
          fill="#682222"
          id="hello"
        />
        <path
          style={{ visibility: "hidden" }}
          d="M81.5 0L162.815 60.1155L131.756 157.384H31.2444L0.184669 60.1155L81.5 0Z"
          fill="#3E5C89"
          id="world"
        />
      </svg>
    </div>
  );
}

export default Lamp;
