import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice"
import authReducer from "./slices/authSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
            
        }),
})

export let persistor = persistStore(store)

// https://github.com/nizzie-2204/Reno-shoe-shop/tree/master/client

//  https://github.com/bradtraversy/mern-tutorial/tree/main/frontend

// https://github.com/shahriarsajeeb/MERN-Ecommerce-store/tree/master/frontend