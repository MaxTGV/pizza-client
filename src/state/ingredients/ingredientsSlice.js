import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "./thunk";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: { pending: null, error: null, data: [] },
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      return { ...state, pending: true };
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      return { ...state, error: null, data: action.payload, pending: false };
    },
    [fetchIngredients.rejected]: (state, action) => {
      return { ...state, error: action.payload, pending: false };
    },
  },
});
