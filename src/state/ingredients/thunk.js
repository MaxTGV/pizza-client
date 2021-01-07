import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIngredients } from "../../shared/api";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async () => {
    try {
      const data = await getIngredients();
      const dataWithCorrectTypes = data.map((item) => ({
        ...item,
        price: +item.price,
      }));
      return dataWithCorrectTypes;
    } catch (error) {
      return error;
    }
  }
);
