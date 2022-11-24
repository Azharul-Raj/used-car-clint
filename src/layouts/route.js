import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Form/Login";
import Register from "../pages/Form/Register";
import HomePage from "../pages/HomePage/HomePage";
import Products from "../pages/Products/Products";
import Main from "./Main/Main";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<HomePage/>
            },
            {
                path: '/category/:id',
                element: <Products />
            },
            {
                path: '/register',
                element:<Register/>
                
            },
            {
                path: '/login',
                element:<Login/>
            }
        ]
    }
])