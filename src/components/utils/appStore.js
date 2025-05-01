import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
import videoSlice from "./videoSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    liveChat: liveChatSlice,
    videoData: videoSlice,
  },
});

export default appStore;
