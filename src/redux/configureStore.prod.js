import { configureStore } from "@reduxjs/toolkit";
import roootReducer from "./reducers";

const store = configureStore({
    reducer: roootReducer,
});

export default store;