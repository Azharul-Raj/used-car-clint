// import { useContext, useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";
import { AuthContext } from "../../../contexts/AuthProvider";
import { advertiseItemsType } from "../../../types/data.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Advertise = () => {
  // const data = useContext(AuthContext);
  const {data:advertiseItems=[]}=useQuery({
    queryKey:["advertise"],
    queryFn:()=>axios.get("/advertise",{
      headers: {
              "content-type":"application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
    }).then(res=>res?.data)
  })

  
  return (
    <>
      {advertiseItems?.length ? (
        <div className="">
          <h3 className="text-4xl text-white text-center">Advertisements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-10">
            {advertiseItems?.map((item:advertiseItemsType) => (
              <AdvertiseCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Advertise;
