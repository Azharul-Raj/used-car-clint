import React, { useContext, useEffect, useState } from "react";
import Buyer from "./Buyer";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
import SpinnerMedium from "../../../components/SpinnerMedium";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { userType } from "../../../types/data.types";

const Buyers = () => {
  const { logOut } = useContext(AuthContext);
  // const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(false);
  // for resetting the modal id
  const [buyerId,setId]=useState(null);
  // useEffect(() => {
    //   setLoading(true);
    //   fetch(`https://usedcarzone-server.vercel.app/identity/Buyer`, {
      //     headers: {
        //       authorization:`berar ${localStorage.getItem('token')}`
        //     }
        //   })
        //     .then((res) => {
  //       if (res.status === 401 || res.status === 403) {
    //         return logOut();
    //       }
    //       return res.json();
    //     })
    //     .then((data) => {
  //       setBuyers(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => toast.error(err.message));
  // }, []);
  const {
    data:buyers=[],
    refetch,
    isError,
    isLoading
  }=useQuery({
    queryKey:["Buyer"],
    queryFn:()=>axios.get("/identity/Buyer",{
      headers:{
        authorization:`berar ${localStorage.getItem('token')}`
      }
    }).then(res=>res.data)
  })
  // const buyers=data;
  if (loading) {
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
            <th>Upgrade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buyers?.map((buyer:userType, idx:number) => (
            <Buyer key={idx} idx={idx} buyer={buyer} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
    {/* {buyerId && <BuyerDeleteModal buyer={buyer} refetch={refetch} />} */}
    </>
  );
};

export default Buyers;
