
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SpinnerMedium from '../../../components/SpinnerMedium';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
  
        const { data: orders = [],isLoading } = useQuery({
            queryKey: ["doctors",user?.email],
            queryFn: () => fetch(`http://localhost:3001/orders?email=${user?.email}`)
            .then(res => res.json())
            // queryFn:()=>axios.get(`/orders?email=${user?.email}`).then(res=>res.json())
            
            
        })
    if (isLoading) {
        return <SpinnerMedium/>
    }
            
        console.log(orders,user?.email);
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Seller Name</th>
        <th>Car Model</th>
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
                    {
                        orders?.map(order => <tr key={order._id}>
                            <th></th>
                            <th>{order.sellerName}</th>
                            <td>{order.carName}</td>
                            <td>{order.price}</td>
                          {
                            order?.isPaid ?
                            <td><Link className='btn-outline' >Paid</Link></td>
                              :<td><Link className='btn' to={`/dashboard/payment/${order._id}`}>Pay</Link></td>
                          }
                          </tr>)
      }
     
    </tbody>
  </table>
</div>
    );
};

export default MyOrders;