import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {postApi} from '../service/api';

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
});