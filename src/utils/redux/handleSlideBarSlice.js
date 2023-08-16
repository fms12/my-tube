import { createSlice } from "@reduxjs/toolkit";

const handleSlideBarSlice = createSlice({
  
  name: "handleSliderOpen",
  initialState: {
    open: true,
  },
  reducers: {
    isOpen: (state) => {
      state.open = !state.open;
    },
    isClose: (state) => {
      state.open = false;
    },
  },
});

export const { isOpen, isClose } = handleSlideBarSlice.actions;
export default handleSlideBarSlice.reducer;
