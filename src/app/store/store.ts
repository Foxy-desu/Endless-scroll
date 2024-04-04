import {configureStore, combineReducers} from "@reduxjs/toolkit";
import postsReducer from "./slices/posts.slice";
import {postApi} from '../service/api';

const rootReducer = combineReducers({
    posts: postsReducer,
    [postApi.reducerPath]: postApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
});