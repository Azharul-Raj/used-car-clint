import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripeKey);
const Payment = () => {
    const order = useLoaderData();
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