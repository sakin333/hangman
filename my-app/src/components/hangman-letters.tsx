import { keys } from "../data/data";

const HangmanLetters = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 md:gap-4 w-full md:w-[800px] px-4">
      {keys.map((key) => (
        <button className="w-[12vw] h-[12vw] max-w-[60px] max-h-[60px] border-2 border-black text-xl sm:text-2xl md:text-3xl font-bold uppercase hover:bg-slate-300 flex items-center  justify-center">
          {key}
        </button>
      ))}
    </div>
  );
};

export default HangmanLetters;
