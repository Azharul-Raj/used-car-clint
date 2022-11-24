import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, image,category_id } = category;
    return (
        <Link to={`/category/${category_id}` }>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <Link to={`/category/${category_id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
    </Link>
    <div className="p-5">
        <Link to={`/category/${category_id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">See The Best { name} Collections</p>
        {/* <Link to="/" className="inline-flex justify-center items-center px-3 py-2 font-medium text-white w-full bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See Collections
        </Link> */}
    </div>
</div>
        </Link>
    );
};

export default Category;