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
import AdminProtected from "../pages/Protected/AdminProtected";
import Protected from "../pages/Protected/Protected";
import SellerProtected from "../pages/Protected/SellerProtected";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
import Main from "./Main/Main";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/category/:id",
        element: (
          <Protected>
            <Products />
          </Protected>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: (
              <Protected>
                <MyOrders />
              </Protected>
            ),
          },
          // {
          //   path: '/dashboard',
          //   element:<SellerProtected><AddProduct/></SellerProtected>
          // },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist />,
          },
          {
            path: "/dashboard/payment/:id",
            element: <Payment />,
            loader: ({ params }) =>
              fetch(`https://usedcarzone-server.vercel.app/payment/${params.id}`),
          },
          {
            path: "/dashboard/add_product",
            element: (
              <SellerProtected>
                <AddProduct />
              </SellerProtected>
            ),
          },
          {
            path: "/dashboard/my_buyers",
            element: (
              <SellerProtected>
                <MyBuyers />
              </SellerProtected>
            ),
          },
          {
            path: "/dashboard/products",
            element: (
              <SellerProtected>
                <MyProducts />
              </SellerProtected>
            ),
          },
          {
            path: "/dashboard/all_sellers",
            element: (
              <AdminProtected>
                <Sellers />
              </AdminProtected>
            ),
          },
          {
            path: "/dashboard/all_buyers",
            element: (
              <AdminProtected>
                <Buyers />
              </AdminProtected>
            ),
          },
          {
            path: "/dashboard/all_reports",
            element: (
              <AdminProtected>
                <Reported />
              </AdminProtected>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

