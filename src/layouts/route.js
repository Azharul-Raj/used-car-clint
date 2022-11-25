import { createBrowserRouter } from "react-router-dom";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import Wishlist from "../pages/Dashboard/MyOrders/Wishlist";
import Payment from "../pages/Dashboard/Payment/Payment";
import AddProduct from "../pages/Dashboard/SellerAccess/AddProduct";
import Login from "../pages/Form/Login";
import Register from "../pages/Form/Register";
import HomePage from "../pages/HomePage/HomePage";
import Products from "../pages/Products/Products";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
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
            },
            {
                path: '/dashboard',
                element: <DashboardLayout />,
                children: [
                    {
                        path: '/dashboard',
                        element:<MyOrders/>
                    },
                    {
                        path: '/dashboard/wishlist',
                        element:<Wishlist/>
                    },
                    {
                        path: '/dashboard/payment/:id',
                        element: <Payment />,
                        loader:({params})=>fetch(`http://localhost:3001/payment/${params.id}`)
                    },
                    {
                        path: '/dashboard/add_product',
                        element:<AddProduct/>
                    }
                ]
            }
        ]
    }
])