import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import SmallSpinner from "../../../components/SmallSpinner";
import { orderType, paymentType } from "../../../types/data.types";
import { addPayment } from "../../../Utilities/AddPayment";

const CheckoutForm = ({ order }:{order:orderType}) => {
  const { _id,carId, sellerName, price,carName, name, email } = order;
  // states
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    fetch("https://usedcarzone-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
    .catch(err=>console.log(err))
  }, [price]);
  
  const stripe:Stripe|any = useStripe();
  const elements = useElements();
  const handlePayment = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setProcessing(true);
    if (elements == null) {
      return;
    }
    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
    console.log(clientSecret);
    const { paymentIntent, error: paymentError } =await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email,
          },
        },
      }
      );
      console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      const payment:paymentType = {
        buyerName: name,
        orderID: _id,
        productID:carId,
        productName:carName,
        sellerName,
        transactionID: paymentIntent.id,
        buyerEmail: email,
        };
      addPayment(payment);
      Swal.fire('Payment Success!',
      'Check out your order!',
      'success')
      setProcessing(false);
    }
    if (paymentError) {
      toast.error(paymentError.message);
    }
    console.log('last');
  };
  return (
    <form className="text-white mt-10" onSubmit={handlePayment}>
      <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: 'white',
            '::placeholder': {
              color: 'white',
            },
          },
          invalid: {
            color: 'red',
          },
        },
      }}
      />
      <button className="w-full btn btn-sm mt-5 text-white" type="submit" disabled={!stripe || !elements}>
        {processing?<SmallSpinner></SmallSpinner> :'Pay'}
      </button>
    </form>
  );
};

export default CheckoutForm;
