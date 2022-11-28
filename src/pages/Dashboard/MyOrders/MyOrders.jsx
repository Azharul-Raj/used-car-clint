import React, { useContext, useEffect, useState } from "react";
import SpinnerMedium from "../../../components/SpinnerMedium";
import { AuthContext } from "../../../contexts/AuthProvider";
import Order from "./Order";

const MyOrders = () => {
  const { user, logOut } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://usedcarzone-server.vercel.app/orders?email=${user?.email}`, {
      headers: {
        authorization: `Berar ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [user?.email]);
  if (loading) {
    return <SpinnerMedium />;
  }

  return (
    <div className="overflow-x-auto">
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
          {orders?.map((order) => (
            <Order key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
