import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Seller from './Seller';

const Sellers = () => {
    const { data:sellers=[],refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn:()=>fetch('http://localhost:3001/identity/Seller').then(res=>res.json())
    })
  return (
      <>
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Verify</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
                    {
                        sellers?.map((seller,idx)=><Seller key={idx} seller={seller} idx={idx} refetch={refetch} />)
      }     
    </tbody>
  </table>
      </div>      
      </>
    );
};

export default Sellers;