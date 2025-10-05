import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../components/pages/Home/Home';
import ErrorPage from '../components/pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   errorElement:<ErrorPage></ErrorPage>,
   children:[
    {
        index: true,
        path:"/",
        Component:Home
    }
   ]
  },
]);