import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { orderType } from '../../../types/data.types';
import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe(process.env.REACT_APP_stripeKey)
const stripePromise = process.env.REACT_APP_stripeKey
  ? loadStripe(process.env.REACT_APP_stripeKey)
  : null;
const Payment = () => {
    const [order,setOrder]=useState<orderType>({
        _id:"",
        name:"",
        email:"",
        carId:"",
        sellerName:"",
        brand:"",
        carName:"",
        price:0,
        phone:"",
        meetingLocation:"",
        isPaid:false,
    })
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`/payment/${id}`).then(res=>{
            console.log(res.data);
            
            setOrder(res.data)
        }).catch(err=>console.log(err)
        )
    },[])

    //@ts-ignore
    // const order:orderType|any = useLoaderData(id);
    return (
        <div className='flex justify-center items-center'>
            <div className="w-96">
            <Elements stripe={ stripePromise}>
                <CheckoutForm order={ order} />
                </Elements>
                </div>
        </div>
    );
};

export default Payment;