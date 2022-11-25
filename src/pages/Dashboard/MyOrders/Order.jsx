import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order }) => {
    const { _id, sellerName, carName, price, isPaid } = order;
    console.log(_id);
    return (
        <tr>
        <th></th>
        <th>{sellerName}</th>
        <td>{carName}</td>
        <td>{price}k$</td>
        {isPaid ? (
          <td>
            <Link className="btn-outline">Paid</Link>
          </td>
        ) : (
          <td>
            <Link className="btn" to={`/dashboard/payment/${order._id}`}>
              Pay
            </Link>
          </td>
        )}
      </tr>
    
    );
};

export default Order;