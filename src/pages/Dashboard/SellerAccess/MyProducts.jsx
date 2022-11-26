import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import SpinnerMedium from '../../../components/SpinnerMedium';
import SingleProduct from './SingleProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { data:myproducts=[],isLoading,refetch } = useQuery({
        queryKey: ['myproducts',user?.displayName],
        queryFn: async () => {
            const res = await axios.get(`my_products/${user?.displayName}`)
            return res.data
        }
    //     queryFn:()=>fetch(`http://localhost:3001/my_products/${user?.displayName}`).then((res) =>
    //     res.json()
    //   ),
    })
    if (isLoading) {
        return <SpinnerMedium/>
    }
    return (
        <div className='grid grid-cols-1 my-6 lg:grid-cols-2 gap-4 place-items-center'>
            {
                myproducts.map(product => <SingleProduct key={product._id} product={ product} refetch={refetch} />)
            }
        </div>
    );
};

export default MyProducts;