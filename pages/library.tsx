import React from "react";
import { libraryData } from "../data/librarySummary";
import BackButton from "../components/library/BackButton";
import { Shelf } from "../components/library/Shelf";
import WordEasterEgg from "../components/library/wordEasterEgg";

function Library() {
  return (
    <div className="mx-8 mb-32 lg:mx-32">
      {/* Words I've learned */}
      <WordEasterEgg />
      <BackButton />
      <div className="mt-10 lg:ml-32">
        <h1 className="font-title text-5xl font-bold">my library</h1>
        {libraryData.map((row, i) => (
          <Shelf
            key={i}
            year={row.year}
            booksRead={row.booksRead}
            booksInProgress={row.booksInProgress}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
