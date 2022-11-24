import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Products = () => {
    const id = useParams();
    const data=useLoaderData()
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{const res= await axios.get(`/category/${id}`);
            return res.data;
        }
    })
    console.log(id, products);
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Products;