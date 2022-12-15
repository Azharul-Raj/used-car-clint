import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useRole from '../../hooks/useRole';
import { addUser } from '../../Utilities/AddUser';
import { getToken } from '../../Utilities/GetToken';

const Header = () => {
  const navigate = useNavigate();
  const { user, emailLogin,updateInfo, logOut } = useContext(AuthContext);
  const [role] = useRole(user?.email);
  // demo login function here
  const handleDemoLogin = () => {
    const name='Demo'
    const email = "demo@gmail.com"
    const password = "123456"
    emailLogin(email, password)
      .then(result => {
        const profile = result.user;
        updateInfo(name)
        getToken(profile.email)
        const userInfo = {
          name: profile.displayName,
            role:"Buyer",
            email: profile.email,
            isVerified:false
        }
        addUser(userInfo)
        navigate('/')
      })
    .catch(err=>toast.error(err.message))
  }
  // demo login function here
  let location;
  if(user?.uid){
  if (role === 'Buyer') {
    location='/dashboard'
  }
  else if (role === 'Seller') {
    location='/dashboard/add_product'
  }
  else if(role==='Admin') {
    location='/dashboard/all_sellers'
    }
  }
  else {    
    location='/dashboard'
  }
  const menus = <>
      <li><Link to='/'>Home</Link></li>
    {user && <li><Link to={location}>Dashboard</Link></li>}
      <li><Link to='/blog'>Blog</Link></li>
    {user?.uid ?
      <li><Link onClick={() => logOut()} to='/' className="btn">Logout</Link></li>
      
      :
      <>
      <li><Link onClick={handleDemoLogin} className="btn">Demo Login</Link></li>
      <li><Link to='/login' className="btn">Login</Link></li>
      </>
      }
  </>
    return (
        <div className="navbar bg-base-100 justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menus}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">UsedCarZone</Link>
  </div>
  <div className="navbar-center hidden lg:flex lg:navbar-end">
          <ul className="menu menu-horizontal p-0">
            {menus}
      
    </ul>
        </div>
      <label htmlFor='dashboard-drawer' tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    {/* </div> */}
</div>
    );
};

export default Header;