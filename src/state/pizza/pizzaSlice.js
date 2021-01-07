import { createSlice } from "@reduxjs/toolkit";

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState: {},
    reducers: {
        setPizza: (state, action) => {
            return action.payload
        }
    }
});

export const {setPizza} = pizzaSlice.actions;