import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCar,FaMapMarkerAlt } from "react-icons/fa";

const Product = ({ product, setBookItem }) => {
    const { name, sellerName, image, brand, poste_date, original_price, sale_price, used, location, condition, desc, isVerified,isSold } = product;
    const handleBook = (item) => {
        setBookItem(item);        
    }
    return (
        <>
        <div className="w-[96%] mx-auto my-5 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{poste_date}</span>
        <Link className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Wishlist</Link>
    </div>
            <div className="flex flex-col lg:flex-row">
                <img src={image} alt="" />
                <div className="lg:mx-5">
                    <div className="">
                        <p className='flex justify-start items-center  lg:font-bold lg:mb-2  lg:text-2xl'><FaCar/> <span className='ml-5'>{brand}</span> </p>
                        <p className='flex  justify-start items-center lg:font-bold lg:mb-2  lg:text-xl'><FaMapMarkerAlt/> <span className='ml-5'>{location}</span> </p>
                        <p className='flex justify-start items-center lg:font-bold  lg:mb-2 lg:text-xl'> Original Price : <span className='ml-5'>{original_price}K$</span> </p>
                        <p className='flex  justify-start items-center lg:font-bold lg:mb-2  lg:text-xl'> Sale Price : <span className='ml-5'>{sale_price}k$</span> </p>
                        <p className='flex  justify-start items-center lg:font-bold lg:mb-2  lg:text-xl'>Condition : <span className='ml-5'>{condition}</span> </p>
                        <p className='flex  justify-start items-center lg:font-bold lg:mb-2  lg:text-xl'>Used : <span className='ml-5'>{used}/year</span> </p>
                    </div>
                </div>
        </div>
    <div className="mt-2">
        <Link to="/" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">{name}</Link>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
    </div>

    <div className="flex items-center justify-between mt-4">
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link"></Link>

        <div className="flex items-center">
            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar"/>
                    <Link className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">{sellerName} { isVerified?'✅':'🟡'}</Link>
                </div>
    </div>
            {/* <button className='w-full btn'>Book Now</button> */}
            <label onClick={()=>handleBook(product)} htmlFor="booking-modal" disabled={isSold===true} className="btn w-full bg-gray-900">{isSold?'BOOKED':'Book Now'}</label>

            </div>
           
            </>
    );
};

export default Product;