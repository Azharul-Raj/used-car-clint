import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import SpinnerMedium from "../../../components/SpinnerMedium";
import { AuthContext } from "../../../contexts/AuthProvider";
import Seller from "./Seller";

const Sellers = () => {
  const { logOut } = useContext(AuthContext);
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
            {sellers?.map((seller, idx) => (
              <Seller key={idx} seller={seller} idx={idx} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Sellers;
