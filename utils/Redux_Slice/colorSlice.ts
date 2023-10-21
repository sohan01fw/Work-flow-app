import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Redux_Store/store";
interface CounterState {
  value: string;
}
const initialState: CounterState = {
  value: "",
};

export const colorSlice = createSlice({
  name: "colorname",
  initialState,
  reducers: {
    getColor: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { getColor } = colorSlice.actions;

export const selectCount = (state: RootState) => state.colorname.value;

export default colorSlice.reducer;
