import React from 'react';

const BuyerDeleteModal = ({ buyer,refetch}) => {
  const handleDelete = (id) => {
    console.log(id);
  }
    return (
        <>
            <input type="checkbox" id="buyer-delete-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
            <h3 className="font-bold text-lg">Are You Sure you will delete { buyer.name}?</h3>
    <p className="py-4">If You delete buyer it can't be retrieved</p>
    <div className="modal-action">
      <label onClick={()=>handleDelete(buyer._id)} htmlFor="buyer-delete-modal" className="btn btn-sm bg-red-500 text-white">Delete</label>
      <label htmlFor="buyer-delete-modal" className="btn btn-sm">Cancel</label>
    </div>
  </div>
</div>
        </>
    );
};

export default BuyerDeleteModal;