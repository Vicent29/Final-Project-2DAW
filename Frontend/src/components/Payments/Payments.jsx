import React from 'react';
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";


import {loadStripe} from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51N54ZjGRV9kK9sofByVWg84nG0zjgfyql5eBA9sfbYSZsOESDc7TZtmsyFgFeNxHunXwXDdA9esmeFy1yWW1qIjT00pvAbVCkB');
    }
    return stripePromise;
};
const Payments = () => {
    async function handleCheckout() {
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: 'price_1N551oGRV9kK9sofWIHQVxU0',
                    quantity: 1,
                },
            ],
            mode: 'payment',
            successUrl: `http://localhost:3000/success`,
            cancelUrl: `http://localhost:3000/cancel`,
            customerEmail: 'customer@email.com',
        });
        console.warn(error.message);
    }

    return (
        <div className={"flex flex-col"}>
            <button className={"inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-indigo-500"} onClick={handleCheckout}>Checkout</button>
        </div>
    )
};

export default Payments;
