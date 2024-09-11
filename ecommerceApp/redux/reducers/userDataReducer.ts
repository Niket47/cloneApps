import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    userInfo: {},
};

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData(state, action) {
            state.userInfo = action.payload;
        }
    }
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;