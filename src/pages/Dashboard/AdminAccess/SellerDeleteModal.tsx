import React from 'react';
import { sellerDeleteModalProps } from '../../../types/props.types';
import { sellerDelete} from '../../../Utilities/SellerDelete';


const SellerDeleteModal = ({sellerId,seller,setSellerId,refetch}:sellerDeleteModalProps) => {
  const handleDelete = (id:string,name:string) => {
    sellerDelete(id,name, refetch);
  }
    return (
        <>
            <input type="checkbox" id="seller-delete-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
            <h3 className="font-bold text-lg">Are You Sure you will delete?</h3>
    <p className="py-4">If You delete seller it can't be retrieved</p>
    <div className="modal-action">
      <label onClick={()=>handleDelete(sellerId,seller)} htmlFor="seller-delete-modal" className="btn btn-sm bg-red-500 text-white">Delete</label>
      <label htmlFor="seller-delete-modal" className="btn btn-sm">Cancel</label>
    </div>
  </div>
</div>
        </>
    );
};

export default SellerDeleteModal;