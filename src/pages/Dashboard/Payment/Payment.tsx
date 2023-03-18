import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import { orderType } from '../../../types/data.types';
import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe(process.env.REACT_APP_stripeKey)
const stripePromise = process.env.REACT_APP_stripeKey
  ? loadStripe(process.env.REACT_APP_stripeKey)
  : null;
const Payment = () => {
    const order:orderType|any = useLoaderData();
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