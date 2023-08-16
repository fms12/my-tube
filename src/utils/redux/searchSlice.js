import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSuggestionCache",
  initialState: {
    cache: {},
  },
  reducers: {
    addToCache: (state, action) => {
      const key = Object.keys(action.payload)[0];
      state.cache[key] = action.payload[key];
    },
  },
});

export const { addToCache } = searchSlice.actions;
export default searchSlice.reducer;
