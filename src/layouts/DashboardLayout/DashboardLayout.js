import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
      <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet/>
          <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      
      </div> 
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li><Link to='/dashboard'>My Orders</Link></li>
          <li><Link to='/dashboard/wishlist'>Sidebar Item 2</Link></li>
        </ul>
      
      </div>
    </div>
    );
};

export default DashboardLayout;