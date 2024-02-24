import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'

import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router=createBrowserRouter([
  {path:'/',element:<Home/>}
  ]);


function App() {
      return (
        <React.StrictMode>
        <RouterProvider router={router} />
        </React.StrictMode>
      );
    };

export default App;
