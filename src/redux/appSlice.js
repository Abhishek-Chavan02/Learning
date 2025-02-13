import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  loading: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState: initalState,
  reducers: {
    stopStartLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { stopStartLoading } = appSlice.actions;
export default appSlice.reducer;
