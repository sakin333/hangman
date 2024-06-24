import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/gameSlice";
import hangmanReducer from "../features/hangmanSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    hangman: hangmanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
