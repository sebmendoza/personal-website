import React from "react";

type Props = {
  title: string;
  year: string;
  description: string;
};

function Card({ title, year, description }: Props) {
  return (
    <div className="h-80 w-80 shrink-0 rounded-[30px] border-2 border-[#c9c9c9] p-6 shadow-md transition-transform duration-150 ease-out hover:scale-[1.03]">
      <h4 className="font-sidenav text-2xl font-bold">{title}</h4>
      <p className="font-semibol font-sidenav text-gray-600">{year}</p>
      <p className="pt-6 font-body font-medium">
        {description}{" "}
        {title === "Teranet" ? (
          <span>
            <a href="Teranet" className="hover:underline">
              here
            </a>
          </span>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}

export default Card;
