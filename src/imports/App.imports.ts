import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Main from "../layouts/Main/Main";
import HomePage from "../pages/HomePage/HomePage";
import Protected from "../pages/Protected/Protected";
import Products from "../pages/Products/Products";
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
import AdminProtected from "../pages/Protected/AdminProtected";
import SellerProtected from "../pages/Protected/SellerProtected";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Form/Register";
import Login from "../pages/Form/Login";

export {
  axios,
  Routes,
  Route,
  Main,
  HomePage,
  Protected,
  Products,
  Blog,
  Buyers,
  Reported,
  Sellers,
  MyOrders,
  Wishlist,
  Payment,
  AddProduct,
  MyBuyers,
  MyProducts,
  AdminProtected,
  SellerProtected,
  DashboardLayout,
  NotFound,
  Register,
  Login,
};
