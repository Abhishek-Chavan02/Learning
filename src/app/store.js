import { configureStore } from "@reduxjs/toolkit";

import  appSlice  from "../redux/appSlice";
import  userSlice  from "../redux/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    app: appSlice,

  },
});
