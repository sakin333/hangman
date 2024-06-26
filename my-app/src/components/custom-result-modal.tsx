import { useAppDispatch, useAppSelector } from "../app/hooks";
import { startGame } from "../features/gameSlice";

const CustomModal = () => {
  const { status } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const handlePlayAgain = () => {
    dispatch(startGame());
  };

  if (status === "playing") return null;

  return (
    <div className="h-[100%] w-[100%] flex justify-center items-center absolute top-0 left-0">
      <div className="bg-white rounded-md shadow-lg w-[90vw] h-[40vh] max-w-[350px] max-h-[280px] flex flex-col items-center justify-center py-4 relative">
        <button onClick={handlePlayAgain}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="size-6 absolute top-3 right-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        {status === "won" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-20 text-green-600 my-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-20 text-red-600 my-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}

        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-6">
          {status === "won" ? "You won!" : "You lost!"}
        </h1>
        <button
          className="bg-blue-400 px-4 py-2 rounded-lg font-bold text-white hover:bg-blue-500 transition"
          onClick={handlePlayAgain}
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
