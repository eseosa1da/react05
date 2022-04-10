import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";

import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    authentication: authSlice,
  },
});

export default store;
