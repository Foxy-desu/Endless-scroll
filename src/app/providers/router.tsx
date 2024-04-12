import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages/main/ui/main-page";
import { FullPostPageContainer } from "../../pages/full-post/model/full-post-page-container";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage/>,
    },
    {
      path: '/posts/:id',
      element: <FullPostPageContainer/>,
    },
    {
      path: '*',
      element: <MainPage/>,
    }
  ]);