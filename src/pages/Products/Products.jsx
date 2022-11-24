
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SpinnerMedium from '../../components/SpinnerMedium';
import Product from './Product';

const Products = () => {
    // const products = useLoaderData()
    const {id}=useParams()
    const { data: products = [],isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async() => {
            const res=  await fetch(`http://localhost:3001/category/${id}`)
            const data = res.json();
            return data;
        }
        
    })
    if (isLoading) {
        return <div className="">
                        <SpinnerMedium/>
                    </div>
    }
    console.log(typeof id);
    return (
        
                    <div className="">
                        {
                            products?.map(product=><Product key={product._id} product={product}/>)
                        }
                    </div>
                    
    );
};

export default Products;