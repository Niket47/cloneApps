import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isTheme: '',
    chooseTheme: ''
};

const settingSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setIsTheme(state, action) {
            state.isTheme = action.payload;
        },
        setChooseTheme(state, action) {
            state.chooseTheme = action.payload;
        }
    }
});

export const { setIsTheme, setChooseTheme } = settingSlice.actions;

export default settingSlice.reducer;