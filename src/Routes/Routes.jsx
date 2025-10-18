import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../components/pages/Home/Home';
import ErrorPage from '../components/pages/ErrorPage';
import Details from '../components/details/Details';


export const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   errorElement:<ErrorPage></ErrorPage>,
   children:[
    {
        index: true,
        loader: ()=>fetch('lawyerData.json'),
        path:"/",
        Component:Home
    },
    
    {
      path: '/lawyerDetails/:id',
       loader: ()=>fetch('lawyerData.json'),
     Component: Details
    }
   ]
  },
]);