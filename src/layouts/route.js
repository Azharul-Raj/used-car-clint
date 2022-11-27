import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import Buyers from "../pages/Dashboard/AdminAccess/Buyers";
import Reported from "../pages/Dashboard/AdminAccess/Reported";
import Sellers from "../pages/Dashboard/AdminAccess/Sellers";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import Wishlist from "../pages/Dashboard/MyOrders/Wishlist";
import Payment from "../pages/Dashboard/Payment/Payment";
import AddProduct from "../pages/Dashboard/SellerAccess/AddProduct";
import MyBuyers from "../pages/Dashboard/SellerAccess/MyBuyers";
import MyProducts from "../pages/Dashboard/SellerAccess/MyProducts";
import Login from "../pages/Form/Login";
import Register from "../pages/Form/Register";
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound/NotFound";
import Products from "../pages/Products/Products";
import Protected from "../pages/Protected/Protected";
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
                element: <Protected><Products /></Protected>
            },
            {
                path:'/blog',
                element:<Blog/>
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
                    },
                    {
                        path: '/dashboard/my_buyers',
                        element:<MyBuyers/>
                    },
                    {
                        path: '/dashboard/products',
                        element:<MyProducts/>
                    },
                    {
                        path: '/dashboard/all_sellers',
                        element:<Sellers/>
                    },
                    {
                        path: '/dashboard/all_buyers',
                        element:<Buyers/>
                    },
                    {
                        path: '/dashboard/all_reports',
                        element:<Reported/>
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element:<NotFound/>
    }
])