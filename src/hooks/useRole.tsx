import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useRole = (email:string|any) => {
  // states
  const [role, setRole] = useState("User");
  const [isLoading, setIsLoading] = useState(true);
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
          setRole(res.data?.position)
          setIsLoading(false);
        })
        .catch((err) => toast.error(err.message));
    }
  }, [email]);
  return [role, isLoading];
};

export default useRole;
