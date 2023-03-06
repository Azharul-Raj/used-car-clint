import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

export default function NewHeader() {
  const [isOpen,setIsOpen]=useState(false);
  const navs=[
    {
      name:"Home"
    },
    {
      name:"About"
    },
    {
      name:"Contact"
    },
    {
      name:"Details"
    },
    {
      name:"Dashboard"
    },
  ]
  return (
    <nav className='p-5 bg-base shadow flex md:items-center justify-between'>
      {/* logo */}
      <div className="z-20">
        <h4 className='text-xl font-bold'>UsedCarZone</h4>
      </div>
      <span onClick={()=>setIsOpen(!isOpen)} className='block text-3xl cursor-pointer lg:hidden text-gray-100'>
        {isOpen? <AiOutlineClose/>:<AiOutlineMenu/>}
      </span>
     <ul className={`flex items-center flex-col lg:flex-row lg:justify-between ${isOpen? "opacity-100 top-16 pb-5":"opacity-0 -top-96"}  transition-all ease-in duration-500 -z-10 absolute bg-[#2a303c] w-full left-0 lg:static lg:z-auto lg:w-auto lg:opacity-100 lg:py-0`}>
      {
        navs.map(nav=>(
          <li className='mx-4 my-2' key={nav.name}>
            <Link className='text-xl hover:tex-cyan-500 duration-500 text-gray-200'>{nav.name}</Link>
          </li>
        ))
      }
      <button className='bg-cyan-500 text-gray-200 duration-500 px-6 py-2 rounded-full'>Get Started</button>
     </ul>
      {/* <div className=""></div> */}
    </nav>
  )
}
