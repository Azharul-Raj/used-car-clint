import React from "react";
import { userType } from "../../../types/data.types";
import { buyerProp } from "../../../types/props.types";
import { makeSeller } from "../../../Utilities/MakeSeller";



const Buyer = ({ buyer,setBuyerId, idx, refetch }:buyerProp) => {
  const { name, email, role, _id } = buyer;
  const handleMakeSeller = (id:string) => {
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
          onClick={()=>setBuyerId(_id)}
            htmlFor="buyer-delete-modal"
            className="btn btn-sm text-white bg-red-500 hover:bg-red-500"
          >
            Delete
          </label>
        </td>
      </tr>
      
    </>
  );
};

export default Buyer;
