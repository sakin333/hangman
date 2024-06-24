import HangmanDrawing from "../components/hangman-drawing";
import HangmanLetters from "../components/hangman-letters";
import HangmanWord from "../components/hangman-word";

const Homepage = () => {
  return (
    <div className="p-4 flex flex-col-reverse md:flex-row items-center h-auto md:h-[100vh]">
      <div className="flex flex-col items-center justify-center flex-grow gap-[30px] md:gap-[90px] p-4 md:p-0">
        <HangmanWord />
        <HangmanLetters />
      </div>
      <div className="flex-grow flex items-center justify-center md:p-0 md:border-l-[4px] md:border-slate-600 h-[600px]">
        <HangmanDrawing />
      </div>
    </div>
  );
};

export default Homepage;
