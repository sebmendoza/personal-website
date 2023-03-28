import React from "react";

function MoreAboutMe() {
  return (
    <div className="relative h-screen pb-11">
      <div className="absolute top-[30%] left-56 cursor-pointer">
        <p className="w-[400px] -rotate-2 text-3xl">
          my reading list is a collection that has rekindled my love of books
        </p>
      </div>

      <div className="absolute top-[59%] right-56 cursor-pointer">
        <p className="mid-sentence group w-[400px] rotate-2 pt-6 text-3xl transition-none duration-500 ease-out">
          here are some thought-out ideas
        </p>
      </div>

      <div className="absolute bottom-0 flex w-full flex-col items-center">
        <div>
          <p>
            shoot me an email or dm on linkedin :) always open to chat about new
            ideas, answer questions some questions, or take reccommendations
          </p>
        </div>
        <div className="my-14 flex gap-48">
          <span>email@email.com</span>
          <span>email@email.com</span>
          <span>email@email.com</span>
        </div>
      </div>
    </div>
  );
}

export default MoreAboutMe;
