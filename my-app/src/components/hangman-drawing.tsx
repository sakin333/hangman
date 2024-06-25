import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateHangman } from "../features/hangmanSlice";

const HEAD = (
  <div className="h-[50px] w-[50px] border-4 border-black rounded-full absolute top-[46px] right-[40px]"></div>
);

const BODY = (
  <div className="h-[90px] w-[4px] bg-black absolute top-[96px] right-[63px]"></div>
);

const LEFT_HAND = (
  <div className="h-[50px] w-[4px] bg-black absolute top-[80px] right-[63px] origin-bottom-right rotate-[-60deg]"></div>
);

const RIGHT_HAND = (
  <div className="h-[50px] w-[4px] bg-black absolute top-[80px] right-[63px] origin-bottom-left rotate-[60deg]"></div>
);

const LEFT_LEG = (
  <div className="h-[50px] w-[4px] bg-black absolute top-[184px] right-[63px] origin-top-left rotate-[30deg]"></div>
);

const RIGHT_LEG = (
  <div className="h-[50px] w-[4px] bg-black absolute top-[184px] right-[63px] origin-top-left rotate-[-30deg]"></div>
);

const HangmanDrawing = () => {
  const dispatch = useAppDispatch();
  const { incorrectGuesses } = useAppSelector((state) => state.game);

  useEffect(() => {
    dispatch(updateHangman(incorrectGuesses));
  }, [incorrectGuesses, dispatch]);

  const { parts } = useAppSelector((state) => state.hangman);

  const hangmanParts = [HEAD, BODY, LEFT_HAND, RIGHT_HAND, LEFT_LEG, RIGHT_LEG];

  return (
    <div className="h-[100%] flex items-center justify-center">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="298.232"
          height="291"
          viewBox="0 0 298.232 291"
          className=" relative"
        >
          <g
            id="Group_688"
            data-name="Group 688"
            transform="translate(-219 -183)"
          >
            <rect
              id="Rectangle_2974"
              data-name="Rectangle 2974"
              width="5"
              height="61.733"
              transform="translate(310.627 183.247) rotate(45)"
            />
            <rect
              id="Rectangle_2966"
              data-name="Rectangle 2966"
              width="5"
              height="298.232"
              rx="2.5"
              transform="translate(517.232 469) rotate(90)"
            />
            <rect
              id="Rectangle_2987"
              data-name="Rectangle 2987"
              width="5"
              height="289"
              rx="2.5"
              transform="translate(267 183)"
            />
            <rect
              id="Rectangle_2988"
              data-name="Rectangle 2988"
              width="187"
              height="5"
              rx="2.5"
              transform="translate(267 183)"
            />
            <rect
              id="Rectangle_2989"
              data-name="Rectangle 2989"
              width="5"
              height="49"
              rx="2.5"
              transform="translate(449 184)"
            />
          </g>
        </svg>
        {parts.map((part) => hangmanParts[part])}
      </div>
    </div>
  );
};

export default HangmanDrawing;
