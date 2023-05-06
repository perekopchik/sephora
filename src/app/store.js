import {configureStore} from "@reduxjs/toolkit";
import {listReducer} from "../engine/features/slice";
import {sephoraApi} from "../engine/services/Sephora";
export const store = configureStore({
    reducer: {
        [sephoraApi.reducerPath]: sephoraApi.reducer,
        products: listReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sephoraApi.middleware)
})