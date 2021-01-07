import { configureStore } from "@reduxjs/toolkit";
import { pizzaSlice } from "./state/pizza/pizzaSlice";
import { ingredientsSlice } from "./state/ingredients/ingredientsSlice";
import { logger } from "redux-logger";
import { loginReducer } from "./LoginPage/state/loginReducer";

const reducer = {
  pizza: pizzaSlice.reducer,
  ingredients: ingredientsSlice.reducer,
  login: loginReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
