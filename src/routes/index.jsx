import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import React from "react";
import ExplorePage from '../pages/ExplorePage'
import DetailPage from '../pages/DetailPage'
import Search from '../pages/SearchPage'
const router = createBrowserRouter([
 
  {
    path: '/',
    element: <App/>,
    children: [
        {
            path: '',
            element: <Home/>
        },
        {
          path: ':explore',
          element: <ExplorePage/>

        },

       {
         path: ':explore/:id',
        element: <DetailPage/>
       },

   {
    path: 'search',
    element:<Search/>

    }
    ]
  }
])

export default router