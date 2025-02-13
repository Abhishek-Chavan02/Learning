import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserInfo: (state, { payload }) => {
      state.users.push(payload);
    },
  },
});

export const {  saveUserInfo } = userSlice.actions;
export default userSlice.reducer;
