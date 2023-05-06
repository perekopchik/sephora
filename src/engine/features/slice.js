import {createSlice} from "@reduxjs/toolkit";

const product = createSlice({
    name: 'product',
    initialState: {

    }
})

export const listReducer= product.reducer;