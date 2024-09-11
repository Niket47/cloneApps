import { createSlice } from "@reduxjs/toolkit";


const LoginUserState = {
    data: "",
    token: ""
};

const LOGIN_USER_SLICE = "loginUserSlice";

const loginUserSlice = createSlice({
    name: LOGIN_USER_SLICE,
    initialState: LoginUserState,
    reducers: {
        getAccessToken: (state, action) => {
            state.token = action.payload;
        },
        getUserData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { getAccessToken, getUserData } = loginUserSlice.actions;
export const loginUserReducer = loginUserSlice.reducer;