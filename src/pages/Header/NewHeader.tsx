import {  useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import { UtilsFunc } from '../../components/UtilsFunc';


export default function NewHeader() {
  const [isOpen,setIsOpen]=useState(false);
  const {pathname}=useLocation();
  
  const {handleDemoLogin,user,logOut,role}=UtilsFunc();
  let location="/dashboard";
  if(role&&role==="Seller"){
    location='/dashboard/add_product';
  }
  if(role&&role==="Admin"){
    location="/dashboard/all_sellers";
  }

  return (
    <nav className='px-4 py-2 lg:py-2 bg-base shadow flex md:items-center justify-between'>
      {/* logo */}
      <Link to="/" className="z-20">
        <h4 className='text-xl font-bold'>UsedCarZone</h4>
      </Link>
      <span onClick={()=>setIsOpen(!isOpen)} className='block text-3xl cursor-pointer lg:hidden text-gray-100'>
        {isOpen? <AiOutlineClose/>:<AiOutlineMenu/>}
      </span>
     <ul className={`flex items-center flex-col lg:flex-row lg:justify-between ${isOpen? "opacity-100 top-12 pb-5":"opacity-0 -top-96"}  transition-all ease-in duration-500 ${pathname==='/dashboard'? 'z-50':"z-[1]"}  absolute bg-[#2a303c] w-full left-0 lg:static lg:z-auto lg:w-auto lg:opacity-100 lg:py-0`}>
      
          <li className='mx-4 my-2' >
            <Link to="" onClick={()=>setIsOpen(false)} className='text-md hover:tex-cyan-500 duration-500 text-gray-200'>Home</Link>
          </li>
          <li className='mx-4 my-2' >
            <Link to={location} onClick={()=>setIsOpen(false)} className='text-md hover:tex-cyan-500 duration-500 text-gray-200'>Dashboard</Link>
          </li>
          <li className='mx-4 my-2' >
            <Link to="/blog" onClick={()=>setIsOpen(false)} className='text-md hover:tex-cyan-500 duration-500 text-gray-200'>Blog</Link>
          </li>
          {pathname==="/dashboard" && <li onClick={()=>setIsOpen(false)} className='mx-4 my-2' >
          <label htmlFor='dashboard-drawer' tabIndex={0} className="text-gray-200 text-md drawer-button btn-ghost lg:hidden">Dashboard Menu</label>
          </li>}
       
      {user?<button onClick={logOut} className='bg-cyan-500 text-gray-200 duration-500 px-6 py-2 rounded-full'>LogOut</button>
      :
        <>
          <Link to="/login" className='bg-cyan-500 text-gray-200 duration-500 px-6 py-2 rounded-full'>Login</Link>
          <button onClick={handleDemoLogin} className='bg-cyan-500 text-gray-200 duration-500 px-6 py-2 my-2 lg:mx-2 rounded-full'>Demo Login</button>
        </>
    }
     </ul>
    </nav>
  )
}
