import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCar, FaMapMarkerAlt, FaThumbsUp, FaFlag } from "react-icons/fa";
import { addReport } from "../../Utilities/AddReport";
import { productType } from "../../types/data.types";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";

interface productProps{
    product:productType;
    setBookItem:React.Dispatch<React.SetStateAction<null>>;
    refetch:<TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}

const Product = ({ product, setBookItem, refetch }:productProps) => {
  const {
    _id,
    name,
    isReported,
    sellerName,
    image,
    brand,
    poste_date,
    original_price,
    sale_price,
    used,
    location,
    condition,
    desc,
    isVerified,
    isSold,
  } = product;
  const handleBook = (item) => {
    setBookItem(item);
  };
  // handle report function
  const handleReport = (id) => {
    addReport(id, refetch);
  };
  return (
    <>
      <div className="w-[96%] mx-auto my-5 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            {poste_date}
          </span>
          <div className="flex">
            <div className="">
              <button
                onClick={() => handleReport(_id)}
                className={
                  isReported
                    ? "flex items-center text-red-500"
                    : "flex items-center"
                }
              >
                <FaFlag />
                <span className="ml-2">Report</span>
              </button>
            </div>
            <div className="ml-4">
              <button className="flex items-center">
                <FaThumbsUp />
                <span className="ml-2">Wishlist</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <img src={image} alt="" />
          <div className="lg:mx-5 lg:mt-8">
            <div className="">
              <p className="flex justify-start items-center  lg:font-bold lg:mb-2  lg:text-2xl">
                <FaCar /> <span className="ml-5">{brand}</span>{" "}
              </p>
              <p className="flex  justify-start items-center lg:font-bold lg:mb-2  lg:text-xl">
                <FaMapMarkerAlt /> <span className="ml-5">{location}</span>{" "}
              </p>
              <p className="flex justify-start items-center lg:font-bold  lg:mb-2 lg:text-xl">
                {" "}
                Original Price :{" "}
                <span className="ml-5">{original_price}K$</span>{" "}
              </p>
              <p className="flex  justify-start items-center lg:font-bold lg:mb-2  lg:text-xl">
                {" "}
                Sale Price : <span className="ml-5">{sale_price}k$</span>{" "}
              </p>
              <p className="flex  justify-start items-center lg:font-bold lg:mb-2  lg:text-xl">
                Condition : <span className="ml-5">{condition}</span>{" "}
              </p>
              <p className="flex  justify-start items-center lg:font-bold lg:mb-2  lg:text-xl">
                Used : <span className="ml-5">{used}/year</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabIndex={0}
            role="link"
          >
            {name}
          </Link>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <Link
            to="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            tabIndex={0}
            role="link"
          ></Link>

          <div className="flex items-center">
            <img
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <Link
                          className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                          tabIndex={0}
                          role="link" to={""}            >
              {sellerName} {isVerified ? "✅" : "🟡"}
            </Link>
          </div>
        </div>
        {/* <button className='w-full btn'>Book Now</button> */}
        {/* need to check out this one */}
        <label htmlFor="booking-modal">
        <button
          onClick={() => handleBook(product)}
        //   htmlFor="booking-modal"
          disabled={isSold}
          className="btn w-full bg-gray-900"
        >
          {isSold ? "BOOKED" : "Book Now"}
        </button>
        </label>
      </div>
    </>
  );
};

export default Product;
