import React, { useContext, useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";
import { AuthContext } from "../../../contexts/AuthProvider";

const Advertise = () => {
  const { user } = useContext(AuthContext);
  const [advertiseItems, setAdvertiseItems] = useState([]);
  
  useEffect(() => {
    fetch(`https://usedcarzone-server.vercel.app/advertise`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdvertiseItems(data);
      });
  }, [user?.email]);

  return (
    <>
      {advertiseItems.length ? (
        <div className="">
          <h3 className="text-4xl text-white text-center">Advertisements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-10">
            {advertiseItems?.map((item) => (
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
