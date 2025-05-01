import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    liveChat: liveChatSlice,
  },
});

export default appStore;
