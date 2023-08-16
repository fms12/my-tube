import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    searchSuggestionCache: searchSlice,
    app: appSlice,
    chat: chatSlice,
  },
});

export default store;