import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState,useContext } from "react";
import SpinnerMedium from "../../../components/SpinnerMedium";
import { AuthContext } from "../../../contexts/AuthProvider";
import { userType } from "../../../types/data.types";
import Seller from "./Seller";
import SellerDeleteModal from "./SellerDeleteModal";

const Sellers = () => {
  const { logOut } = useContext(AuthContext);
  const [sellerId,setSellerId]=useState(null);
  const [seller,setSeller]=useState("")
  const { data: sellers = [],isLoading,refetch } = useQuery({
    queryKey: ['sellers'],
    queryFn:()=>axios.get('/seller').then(res=>res.data)
  })
  if (isLoading) {
    return <SpinnerMedium />;
  }
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verify</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller:userType, idx:number) => (
              <Seller key={idx} seller={seller} idx={idx} setSellerId={setSellerId} setSeller={setSeller} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
      {
        sellerId && (<SellerDeleteModal sellerId={sellerId} setSellerId={setSellerId} refetch={refetch} seller={seller} />)
      }
    </>
  );
};

export default Sellers;
