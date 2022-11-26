import React from 'react';

const SellerDeleteModal = ({seller,refetch}) => {
  const handleDelete = (id) => {
    console.log(id);
  }
    return (
        <>
            <input type="checkbox" id="seller-delete-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
            <h3 className="font-bold text-lg">Are You Sure you will delete { seller.name}?</h3>
    <p className="py-4">If You delete seller it can't be retrieved</p>
    <div className="modal-action">
      <label onClick={()=>handleDelete(seller._id)} htmlFor="seller-delete-modal" className="btn btn-sm bg-red-500 text-white">Delete</label>
      <label htmlFor="seller-delete-modal" className="btn btn-sm">Cancel</label>
    </div>
  </div>
</div>
        </>
    );
};

export default SellerDeleteModal;