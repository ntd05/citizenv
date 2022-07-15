import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

export const dataSlide = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state, action) {
      state = action.payload;
      console.log(state);
      console.log(typeof (state));
      return state;
    }
  }
});


export const { getData } = dataSlide.actions;
export default dataSlide.reducer;