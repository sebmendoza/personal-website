import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function SidenavMobile() {
  const { scrollYProgress } = useScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });

  const checkTextToShow = (p: any) => {
    if (p < 0.33) {
      return "welcome";
    } else if (p < 0.66) {
      return "things I spend time on";
    } else {
      return `more about me`;
    }
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-32 bg-white lg:hidden">
      <div className="flex h-full w-full items-center justify-center font-title text-3xl ">
        {checkTextToShow(scrollYProgress.get())}
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-4 origin-[0%] rounded-r-xl bg-green-900"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}

export default SidenavMobile;
