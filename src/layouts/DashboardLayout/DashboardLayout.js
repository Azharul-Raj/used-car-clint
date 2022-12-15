import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useRole from '../../hooks/useRole';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role] = useRole(user?.email);
    return (
      <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet/>             
      </div> 
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {role ==='User' &&
              <>
                <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/wishlist'>Wish List</Link></li>
              </>
          }
            {role==='Buyer' &&
              <>
                <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/wishlist'>Wish List</Link></li>
              </>
          }
            {
              role === 'Seller' && <>
              <li><Link to='/dashboard/add_product' >Add A Product</Link></li>
              <li><Link to='/dashboard/my_buyers' >My Buyers</Link></li>
              <li><Link to='/dashboard/products' >My Products</Link></li>
              </>
            }
            {
              role === 'Admin' && <>
              <li><Link to='/dashboard/all_sellers' >All Sellers</Link></li>
              <li><Link to='/dashboard/all_buyers' >All Buyers</Link></li>
              <li><Link to='/dashboard/all_reports' >Reported Items</Link></li>
              </>
            }
        </ul>
      
      </div>
    </div>
    );
};

export default DashboardLayout;