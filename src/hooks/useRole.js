import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useRole = (email) => {
  // states
  const [role, setRole] = useState("User");
  const [isLoading, setIsLoading] = useState(true);
  //   const {data,isLoading:loading} = useQuery({
  //     queryKey: ["user"],
  //     queryFn: () =>{email &&
  //       axios
  //         .get(`/user/role/${email}`,{
  //             headers:{
  //                 "content-type":"application/json"
  //             }
  //         })
  //         .then((res) => res.data)
  //         .catch((err) => toast.error(err.message))},
  //   });
  //   console.log(data?.position);
  //   console.log(loading);
  useEffect(() => {
    if (email) {
      axios
        .get(`/user/role/${email}`, {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) =>{
            console.log(res.data);
        })
        //   fetch(`https://usedcarzone-server.vercel.app/user/role/${email}`)
        //       .then(res => res.json())
        //       .then(data => {
        //           setRole(data.position)
        //           setIsLoading(false);
        //       })
        .catch((err) => toast.error(err.message));
    }
  }, [email]);
  return [role, isLoading];
};

export default useRole;
