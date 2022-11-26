import React from 'react';
import SellerDeleteModal from './SellerDeleteModal';

const Seller = ({ seller,idx,refetch }) => {
    const { name, email, role, _id } = seller;
    return (
        <>
        <tr>
            <th>0 { idx+1}</th>
        <td>{name}</td>
        <td>{email}</td>
                <td>{role}</td>
                <td><button className='btn btn-sm bg-green-500 hover:bg-green-400 text-white'>Verify</button></td>
        <td><label htmlFor="seller-delete-modal" className="btn btn-sm text-white bg-red-500 hover:bg-red-400">Delete</label>
</td>
            </tr>
            {
                seller && <SellerDeleteModal seller={seller } refetch={refetch} />
            }
            </>
    );
};

export default Seller;