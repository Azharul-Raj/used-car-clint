import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { name, sellerName, image, brand, poste_date, original_price, sale_price, used, location, condition, desc, isVerified } = product;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
                <div className="modal-box">
                    <div className="flex justify-between mb-8">
                        <h3 className="font-bold text-lg">Book {name} of {brand} Brand</h3>
                        <label htmlFor="my-modal" className="btn btn-sm bg-black text-white btn-circle absolute right-2 top-2">✕</label>
                    </div>
                    <input type="text" {...register('name')} className="input mb-4 border-gray-100 input-bordered input-md w-full" id="" />
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingModal;