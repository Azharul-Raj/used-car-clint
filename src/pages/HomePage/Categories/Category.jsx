import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { name, image, category_id } = category;
  return (
    <Link to={`/category/${category_id}`}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">        
          <img className="rounded-t-lg" src={image} alt="" />        
        <div className="p-5">          
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            See The Best {name} Collections
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Category;
