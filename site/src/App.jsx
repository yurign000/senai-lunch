import { Outlet } from "react-router-dom";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import MainPage from './pages/mainPage/MainPage';
import ProductList from './pages/ProductList/ProductList'

import { useContext } from "react";
import { UsuarioContext } from "./context/UsuarioContext";

export default function App(){
    const {logado} = useContext(UsuarioContext);

    const router = createBrowserRouter([
        {
            path: "/", 
            element: <MainPage/>
        },
        {
            path: "/product-list", 
            element: logado ? <ProductList/> : <MainPage/>
        },
    ]);
    
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
