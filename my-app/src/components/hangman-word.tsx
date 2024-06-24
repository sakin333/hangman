import { useState } from "react";
import { randomWords } from "../data/data";

const HangmanWord = () => {
  const guessedWord = "tet";

  const [word, setWord] = useState(
    () => randomWords[Math.floor(Math.random() * randomWords.length)]
  );
  return (
    <div className="p-4 flex justify-center gap-6 mb-[32px] flex-wrap">
      {word.split("").map((letter, index) => (
        <div
          key={index}
          className="border-black border-b-8 w-[12vw] h-[12vw] max-w-[60px] max-h-[80px] flex items-center justify-center"
        >
          <span
            className={`font-bold uppercase text-3xl sm:text-4xl md:text-5xl ${
              !guessedWord.includes(letter) ? "hidden" : ""
            }`}
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HangmanWord;
