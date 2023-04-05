import React from "react";
const landingPageAdjectives = [
  "I explore",
  "I build communities",
  "and I code as an expression of my creativity",
];

function Landing() {
  return (
    <div className="relative h-screen w-full">
      {/* Call out of who/ what I am */}
      <section className="absolute top-[30%]">
        <h1 className="mb-3 text-5xl">Hi I&apos;m Sebastian</h1>
        <div className="ml-5 flex flex-col gap-5 text-3xl">
          {landingPageAdjectives.map((adj) => {
            return (
              <div key={adj} className="mt-1 flex items-center gap-x-4">
                <div className="h-[10px] w-[10px] bg-black"></div>
                <h3>{adj}</h3>
              </div>
            );
          })}
        </div>
      </section>
      <div className="absolute bottom-[15%] right-0">
        <h3 className="text-2xl">
          learning @uwaterloo by day <br /> playing spikeball and poker by night
        </h3>
      </div>
    </div>
  );
}

export default Landing;
