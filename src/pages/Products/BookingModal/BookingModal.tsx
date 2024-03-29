import React, { useContext} from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { bookModalType, carInfo } from "../../../types/data.types";
import { bookCar } from "../../../Utilities/BookCar";

const BookingModal = ({ bookItem,setBookItem }:bookModalType) => {
  const data = useContext(AuthContext);
  const { _id, name, sellerName, brand, sale_price } = bookItem;

  const handleBooking = (e:React.ChangeEvent<HTMLInputElement>|any) => {
    e.preventDefault();
    const { target } = e;
  const name = target.elements.namedItem("name").value;
  const email = target.elements.namedItem("email").value;
  const carName = target.elements.namedItem("carName").value;
  const strPrice = target.elements.namedItem("price").value;
  const price = parseFloat(strPrice.split(" ")[0]);
  const phone = target.elements.namedItem("phone").value;
  const location = target.elements.namedItem("location").value;
    const bookingInfo:carInfo = {
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
                // @ts-ignore
                defaultValue={data?.user?.displayName}
                className="input mb-4 border-gray-100 input-bordered input-md w-full"
                id=""
              />
              <input
                type="text"
                disabled
                name="email"
                // @ts-ignore
                defaultValue={data?.user?.email}
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
