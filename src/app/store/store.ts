import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./slices/posts.slice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});