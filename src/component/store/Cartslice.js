import { createSlice } from "@reduxjs/toolkit";

let Cartslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export let { add, remove } = Cartslice.actions;

export default Cartslice.reducer;
