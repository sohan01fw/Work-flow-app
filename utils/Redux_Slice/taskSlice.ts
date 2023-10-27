import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Redux_Store/store";

type initialValues = {
  inputTaskValue: string;
};
const initialState: initialValues = {
  inputTaskValue: "",
};
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    onChangeHandler: (state, action: PayloadAction<string>) => {
      state.inputTaskValue = action.payload;
    },
  },
});

export const { onChangeHandler } = taskSlice.actions;
export const selectInputTask = (state: RootState) => state.task;
export default taskSlice.reducer;
