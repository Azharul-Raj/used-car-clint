import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { bookCar } from "../../../Utilities/BookCar";

const BookingModal = ({ bookItem,setBookItem }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, sellerName, brand, sale_price } = bookItem;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const carName = form.carName.value;
      const strPrice = form.price.value;
      const price=parseFloat(strPrice.split(' '))
    const phone = form.phone.value;
    const location = form.location.value;
    const bookingInfo = {
      name,
      email,
      carId: _id,
      sellerName,
      brand,
      carName,
      price,
      phone,
      meetingLocation: location,
    };
    bookCar(bookingInfo);
    setBookItem(null);
  };
  // handle close function
  const handleClose = () => {
    setBookItem(null);
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex justify-between mb-8">
            <h3 className="font-bold text-lg">
              Book {name} of {brand} Brand
            </h3>
            <label
              onClick={handleClose}
              htmlFor="booking-modal"
              className="btn btn-sm bg-black text-white btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <div className="">
            <form onSubmit={(e) => handleBooking(e)}>
              <input
                type="text"
                disabled
                name="name"
                defaultValue={user?.displayName}
                className="input mb-4 border-gray-100 input-bordered input-md w-full"
                id=""
              />
              <input
                type="text"
                disabled
                name="email"
                defaultValue={user?.email}
                className="input mb-4 border-gray-100 input-bordered input-md w-full"
                id=""
              />
              <input
                type="text"
                disabled
                name="carName"
                defaultValue={name}
                className="input mb-4 border-gray-100 input-bordered input-md w-full"
                id=""
              />
              <input
                type="text"
                disabled
                name="price"
                defaultValue={sale_price + "K$"}
                className="input mb-4 border-gray-100 input-bordered input-md w-full"
                id=""
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                className="input mb-4 border-gray-100 input-bordered input-md w-full"
                id=""
              />
              <input
                type="text"
                name="location"
                placeholder="Meeting Location"
                className="input mb-4 border-gray-100 input-bordered input-md w-full"
                id=""
              />
              <div className="modal-action mt-[-4px]">
                <button className="btn w-full" type="submit">
                  <label htmlFor="booking-modal" className="btn w-full">
                    Book Now
                  </label>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
