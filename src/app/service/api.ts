import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { IPost } from "../../shared/types";

export const postApi = createApi({
    reducerPath:'postApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints:(builder)=>({
        fetchAllPosts: builder.query<IPost[],{limit:number,start:number}>({
            query:({limit=7, start=0 })=>({
                url:'/posts',
                params:
                 {
                    _limit: limit,
                    _start: start,
                }
            })
        }),
        fetchPostById: builder.query<IPost, string>({
            query: (id)=>({
                url:`/posts/${id}`,
            })
        })
    })
})

export const {useFetchAllPostsQuery, useFetchPostByIdQuery} = postApi;