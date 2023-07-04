import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './pages/mainPage/MainPage';
import ProductList from './pages/ProductList/ProductList'
import App from './App';
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <MainPage/>},
      {path: "/product-list", element: <ProductList/>},
    ]
  }
]);

import { UsuarioProvider } from './context/UsuarioContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <UsuarioProvider>
      <RouterProvider router={router} />
    </UsuarioProvider>
  </React.Fragment>
)