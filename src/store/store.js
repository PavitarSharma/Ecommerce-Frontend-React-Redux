import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"

const store = configureStore({
    reducer: {
        product: productReducer
    }
})

export default store

// https://github.com/nizzie-2204/Reno-shoe-shop/tree/master/client