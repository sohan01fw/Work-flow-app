import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Redux_Store/store";
interface CounterState {
  inputTaskValue?: string;
  selectValue?: string;
}
const initialState: CounterState = {
  inputTaskValue: "",
  selectValue: "",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    onChangeHandler: (state, action: PayloadAction<string>) => {
      state.inputTaskValue = action.payload;
    },
    onSelectHandler: (state, action: PayloadAction<string>) => {
      state.selectValue = action.payload;
    },
  },
});

export const { onChangeHandler, onSelectHandler } = taskSlice.actions;

type InputValue = {
  inputTaskValue: string;
  selectValue: string;
};

import { createSelector } from "@reduxjs/toolkit";

export const TaskValues = createSelector(
  (state: RootState) => state.task.inputTaskValue,
  (state: RootState) => state.task.selectValue,
  (inputTaskValue, selectValue) =>
    ({
      inputTaskValue,
      selectValue,
    } as InputValue)
);

export default taskSlice.reducer;
