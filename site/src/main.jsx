import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './pages/mainPage/MainPage';
import ProductList from './pages/ProductList/ProductList'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/product-list",
    element: <ProductList/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
)