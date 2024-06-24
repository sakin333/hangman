import { useAppDispatch, useAppSelector } from "../app/hooks";
import { keys } from "../data/data";
import { guessLetter } from "../features/gameSlice";

const HangmanLetters = () => {
  const dispatch = useAppDispatch();
  const { guessedLetters, word } = useAppSelector((state) => state.game);
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 md:gap-4 w-full md:w-[800px] px-4">
      {keys.map((key) => (
        <button
          onClick={() => dispatch(guessLetter(key))}
          className={`w-[12vw] h-[12vw] max-w-[60px] max-h-[60px] border-2 border-black text-xl sm:text-2xl md:text-3xl font-bold uppercase hover:bg-slate-300 flex items-center  justify-center ${
            guessedLetters.includes(key)
              ? word.split("").includes(key)
                ? "bg-green-400 hover:bg-green-400"
                : "bg-slate-300"
              : ""
          } disabled:opacity-[0.5]`}
          disabled={guessedLetters.includes(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default HangmanLetters;
