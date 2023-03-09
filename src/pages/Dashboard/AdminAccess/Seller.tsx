import React from "react";
import SellerDeleteModal from "./SellerDeleteModal";
import { verifySeller } from "../../../Utilities/VerifySeller";
import { sellerProp } from "../../../types/props.types";

const Seller = ({ seller, idx, refetch }:sellerProp) => {
  const { name, email, role,isVerified } = seller;
  // verify function here

  const sellerVerify = () => {
    verifySeller(name, refetch);
  };
  return (
    <>
      <tr>
        <th>0 {idx + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>
          <button
            onClick={sellerVerify}
            disabled={isVerified}
            className="disabled:text-white disabled:bg-black btn btn-sm bg-green-500 hover:bg-green-400 text-white"
          >
            {isVerified ? "verified✅" : "unverified"}
          </button>
        </td>
        <td>
          <label
            htmlFor="seller-delete-modal"
            className="btn btn-sm text-white bg-red-500 hover:bg-red-400"
          >
            Delete
          </label>
        </td>
      </tr>
      {seller && <SellerDeleteModal seller={seller} refetch={refetch} />}
    </>
  );
};

export default Seller;
