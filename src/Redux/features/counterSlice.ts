import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    customIncrement: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, customIncrement } = counterSlice.actions;
export default counterSlice.reducer;
