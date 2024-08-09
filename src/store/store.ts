import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";

const store = configureStore({
  reducer: {
    appData: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
