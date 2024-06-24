import { createSlice } from "@reduxjs/toolkit";
import { randomWords } from "../data/data";

type InitialState = {
  word: string;
  guessedLetters: string[];
  incorrectGuesses: number;
  maxIncorrectGuesses: number;
  status: string;
};

const initialState: InitialState = {
  word: "",
  guessedLetters: [],
  incorrectGuesses: 0,
  maxIncorrectGuesses: 6,
  status: "playing",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.word = randomWords[Math.floor(Math.random() * randomWords.length)];
      (state.guessedLetters = []),
        (state.incorrectGuesses = 0),
        (state.status = "playing");
    },
    guessLetter: (state, action) => {
      const letter = action.payload;
      if (!state.guessedLetters.includes(letter)) {
        state.guessedLetters.push(letter);
        if (!state.word.includes(letter)) {
          state.incorrectGuesses += 1;
        }

        const wordGuessed = state.word
          .split("")
          .every((letter) => state.guessedLetters.includes(letter));
        if (wordGuessed) {
          state.status = "won";
        }

        if (state.incorrectGuesses >= state.maxIncorrectGuesses) {
          state.status = "lost";
        }
      }
    },
  },
});

export const { startGame, guessLetter } = gameSlice.actions;
export default gameSlice.reducer;
