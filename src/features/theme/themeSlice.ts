import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../../misc/types";

type InitialState = {
  theme: Theme;
};

const initialState: InitialState = {
  theme: "light",
};

const cakeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state: { theme: Theme }, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { setTheme } = cakeSlice.actions;
