import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import SpinnerMedium from "../../../components/SpinnerMedium";
import { AuthContext } from "../../../contexts/AuthProvider";
import { orderType } from "../../../types/data.types";
import Order from "./Order";

const MyOrders = () => {
  const contextData = useContext(AuthContext);
  const {data:orders=[],isLoading,isError}=useQuery({
    queryKey:["order"],
    queryFn:()=>axios.get(`/orders?email=${contextData?.user?.email}`,{
      headers:{
        "content-type":"application/json",
        authorization: `Berar ${localStorage.getItem("token")}`,
      }
    }).then(res=>res.data)
  })
  if (isLoading) {
    return <SpinnerMedium />;
  }
  if(isError){
    toast.error("Something went wrong")
  }

  return (
    <>
    {orders?.length?<div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Car Model</th>
            <th>Price</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order:orderType) => (
            <Order key={order._id} order={order} />
          ))}
        </tbody>
      </table>
      </div> :
        <div className="flex justify-center items-center text-4xl font-bold">
          <h3 >NO ORDERS FOUND</h3>
        </div>
      }
      </>
  );
};

export default MyOrders;


