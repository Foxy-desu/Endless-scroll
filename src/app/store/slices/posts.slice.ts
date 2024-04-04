import { createSlice } from "@reduxjs/toolkit";

const initialState: IPost[] = [];

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        deletePost: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
});

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
