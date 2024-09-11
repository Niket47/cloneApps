
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { thunk } from 'redux-thunk';
import settingReducer from "./reducers/settingReducer";
import userDataReducer from "./reducers/userDataReducer";


const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ['', "userDataReducer"], // only navigation will be persisted
    blacklist: ['navigation'] // navigation will not be persisted
};

const rootReducer = combineReducers({
    settingReducer: settingReducer,
    userDataReducer: userDataReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(thunk)
});

const persistor = persistStore(store);

export { store, persistor };