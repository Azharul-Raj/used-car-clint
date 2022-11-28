import React from "react";
import { Link } from "react-router-dom";
import { makeSeller } from "../../../Utilities/MakeSeller";
import BuyerDeleteModal from "./BuyerDeleteModal";

const Buyer = ({ buyer, idx, refetch }) => {
  const { name, email, role, _id } = buyer;
  const handleMakeSeller = (id) => {
    makeSeller(id, refetch);
  }
  return (
    <>
      <tr>
        <th>0 {idx + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td><button onClick={()=>handleMakeSeller(_id)} disabled={role==='Seller'} className="btn btn-sm bg-green-500 text-white">make seller</button></td>
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
