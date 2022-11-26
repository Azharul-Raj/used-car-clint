import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Buyer from './Buyer';

const Buyers = () => {
    const { data:buyers=[],refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn:()=>fetch('http://localhost:3001/identity/Buyer').then(res=>res.json())
    })
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
                          {
                              buyers?.map((buyer,idx)=><Buyer key={idx} idx={idx} buyer={buyer} refetch={refetch} />)
            }     
          </tbody>
        </table>
      </div>
    );
};

export default Buyers;