import React, { useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  const [advertiseItems, setAdvertiseItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/advertise`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdvertiseItems(data);
      });
  }, []);
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
