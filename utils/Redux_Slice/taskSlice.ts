import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Redux_Store/store";
interface CounterState {
  inputTaskValue: string;
  selectValue: string;
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

export const InputText = (state: RootState) => state.task.inputTaskValue;
export const SelectInput = (state: RootState) => state.task.selectValue;

export default taskSlice.reducer;
