import {
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
} from "./imports/App.imports";

axios.defaults.baseURL = "https://usedcarzone-server.vercel.app";
function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router}>        
        </RouterProvider> */}
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<HomePage />} />,
          <Route
            path="/category/:id"
            element={
              <Protected>
                <Products />
              </Protected>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* dashboard layout here */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route
              path="/dashboard"
              element={
                <Protected>
                  <MyOrders />
                </Protected>
              }
            />
            <Route path="/dashboard/wishlist" element={<Wishlist />} />
            <Route
              path="/dashboard/payment/:id"
              element={<Payment />}
              loader={({ params }) =>
                fetch(
                  `https://usedcarzone-server.vercel.app/payment/${params.id}`
                )
              }
            />
            <Route
              path="/dashboard/add_product"
              element={
                <SellerProtected>
                  <AddProduct />
                </SellerProtected>
              }
            />
            <Route
              path="/dashboard/my_buyers"
              element={
                <SellerProtected>
                  <MyBuyers />
                </SellerProtected>
              }
            />
            <Route
              path="/dashboard/products"
              element={
                <SellerProtected>
                  <MyProducts />
                </SellerProtected>
              }
            />
            <Route
              path="/dashboard/all_sellers"
              element={
                <AdminProtected>
                  <Sellers />
                </AdminProtected>
              }
            />
            <Route
              path="/dashboard/all_buyers"
              element={
                <AdminProtected>
                  <Buyers />
                </AdminProtected>
              }
            />
            <Route
              path="/dashboard/all_reports"
              element={
                <AdminProtected>
                  <Reported />
                </AdminProtected>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
