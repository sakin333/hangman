import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  parts: number[];
};

const initialState: InitialState = {
  parts: [],
};

const hangmanSlice = createSlice({
  name: "hangman",
  initialState,
  reducers: {
    updateHangman: (state, action) => {
      const incorrectGuesses = action.payload;
      state.parts = [];
      for (let i = 0; i < incorrectGuesses; i++) {
        state.parts.push(i);
      }
    },
  },
});

export const { updateHangman } = hangmanSlice.actions;

export default hangmanSlice.reducer;
