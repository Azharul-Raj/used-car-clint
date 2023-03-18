
import { Link } from "react-router-dom";
import { orderType } from "../../../types/data.types";

const Order = ({ order }:{order:orderType}) => {
  const { _id, sellerName, carName, price, isPaid } = order;
  return (
    <tr>
      <th></th>
      <th>{sellerName}</th>
      <td>{carName}</td>
      <td>{price}k$</td>
      {isPaid ? (
        <td>
          <button className="btn-outline">Paid</button>
        </td>
      ) : (
        <td>
          <Link className="btn" to={`/dashboard/payment/${_id}`}>
            Pay
          </Link>
        </td>
      )}
    </tr>
  );
};

export default Order;
