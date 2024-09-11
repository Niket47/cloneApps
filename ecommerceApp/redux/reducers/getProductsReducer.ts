import { createSlice } from "@reduxjs/toolkit";
import { getProductsAction } from "../actions/getProductsAction";


const getDataState = {
    isLoading: false,
    data: [],
    error: "",
};

const GET_ALL_DATA_SLICE = "getAllDataSlice";

const getProductsSlice = createSlice({
    name: GET_ALL_DATA_SLICE,
    initialState: getDataState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProductsAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getProductsAction.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(getProductsAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const getProductsReducer = getProductsSlice.reducer;