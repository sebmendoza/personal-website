import React from "react";

type Props = {
  title: string;
  year: string;
  description: string;
};

function Cards({ title, year, description }: Props) {
  return (
    <div className="h-[250px] w-[250px] shrink-0 cursor-pointer rounded-[40px] border-[1px] border-black/75 p-6 shadow-md transition-transform duration-150 ease-out hover:scale-[1.03]">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-gray-600">{year}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
}

export default Cards;
