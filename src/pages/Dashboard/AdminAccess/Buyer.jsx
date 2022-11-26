import React from "react";
import { Link } from "react-router-dom";
import BuyerDeleteModal from "./BuyerDeleteModal";

const Buyer = ({ buyer, idx, refetch }) => {
  console.log(idx);
  const { name, email, role, _id } = buyer;
  return (
    <>
      <tr>
        <th>0 {idx + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>
          <label
            htmlFor="buyer-delete-modal"
            className="btn btn-sm text-white bg-red-500 hover:bg-red-500"
          >
            Delete
          </label>
        </td>
      </tr>
      {buyer && <BuyerDeleteModal buyer={buyer} refetch={refetch} />}
    </>
  );
};

export default Buyer;
