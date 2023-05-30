import React, { useContext, useEffect, useState} from 'react'
import {PaymentElement,useElements,useStripe,} from "@stripe/react-stripe-js";
import AuthContextProvider from '../../context/AuthContext'
import { useAuth } from "../../hooks/useAuth";
import { toast } from 'react-toastify';

import { loadStripe } from "@stripe/stripe-js";

export const ControlBalanceStripe = () => {
      const { user, setUser} = useContext(AuthContextProvider);
      const [form, setForm] = useState({});
      const { updateUser } = useAuth();
    useEffect(() => {
      const currentUrl = window.location.href;
        if (currentUrl.includes("profileStripe")) {
            const stirpe_price= localStorage.getItem('stripe');
            if(stirpe_price){
               const price = parseFloat(user.balance) + parseFloat(atob(stirpe_price));
               localStorage.removeItem('stripe');
               setUser({...user, balance: price, changeBalance: true});
               setForm({...form, balance : price});
            }
      }
    }, []);
    useEffect(() => {
        if(user.changeBalance) {
            updateUser(form);
            setUser({...user, changeBalance: false});
        }
        
      }, [form]);
  };

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51N54ZjGRV9kK9sofByVWg84nG0zjgfyql5eBA9sfbYSZsOESDc7TZtmsyFgFeNxHunXwXDdA9esmeFy1yWW1qIjT00pvAbVCkB"
    );
  }
  return stripePromise;
};

export const Payments = () => {
  async function addMoney(product, price) {
    const addBalance = btoa(String(price));
    localStorage.setItem("stripe", addBalance);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: product,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: `http://greenwheels.francecentral.cloudapp.azure.com:3000/#/profileStripe`,
      cancelUrl: `http://greenwheels.francecentral.cloudapp.azure.com:3000`,
    });
    if (error) {
        toast.error("The charge of " + price + "€ to the account couldn't be made", {
            position: toast.POSITION.TOP_RIGHT,
        });
      }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap justify-start gap-5 items-center">
      <div className="bg-[#ECEEFF] rounded-xl">
          <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-70 md:w-auto">
            <div className="mt-3 font-semibold text-lg">Add to balance 5€</div>
            <div className="text-sm font-light w-60 md:w-auto">
            Up to 10min/free
            </div>
            <div className="flex justify-center mt-3">
                <img className="w-16" src="https://i.postimg.cc/sg9Hkqy1/5.png"/>
            </div>
            <button id='5€' className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4" onClick={() => addMoney("price_1N8mPrGRV9kK9sofoGeCEvTS", 5)}>Add money</button>
          </div>
        </div>

        <div className="bg-[#ECEEFF] rounded-xl">
          <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-70 md:w-auto">
            <div className="mt-3 font-semibold text-lg">Add to balance 10€</div>
            <div className="text-sm font-light w-60 md:w-auto">
            Up to 20min/free
            </div>
            <div className="flex justify-center mt-3">
                <img className="w-16" src="https://i.postimg.cc/Bv7psGzZ/10.png"/>
            </div>
            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4" onClick={() => addMoney("price_1N551oGRV9kK9sofWIHQVxU0", 10)}>Add money</button>
          </div>
        </div>

        <div className="bg-[#ECEEFF] rounded-xl">
        <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-70 md:w-auto">
            <div className="mt-3 font-semibold text-lg">Add to balance 15€</div>
            <div className="text-sm font-light w-60 md:w-auto">
            Up to 40min/free
            </div>
            <div className="flex justify-center mt-3">
                <img className="w-16" src="https://i.postimg.cc/vBHmrJ8n/15.png"/>
            </div>
            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4" onClick={() => addMoney("price_1N8muLGRV9kK9sofrL9QDHVX", 15)}>Add money</button>
          </div>
        </div>
        <div className="bg-[#ECEEFF] rounded-xl">
        <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-70 md:w-auto">
            <div className="mt-3 font-semibold text-lg">Add to balance 20€</div>
            <div className="text-sm font-light w-60 md:w-auto">
            Up to 80min/free
            </div>
            <div className="flex justify-center mt-3">
                <img className="w-16" src="https://i.postimg.cc/kgQMkJB8/20.png"/>
            </div>
            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4" onClick={() => addMoney("price_1N8mv0GRV9kK9sofXoxegCyn", 20)}>Add money</button>
          </div>
        </div>

        <div className="bg-[#ECEEFF] rounded-xl">
        <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-70 md:w-auto">
            <div className="mt-3 font-semibold text-lg">Add to balance 25€</div>
            <div className="text-sm font-light w-60 md:w-auto">
              Up to 100min/free
            </div>
            <div className="flex justify-center mt-3">
                <img className="w-16" src="https://i.postimg.cc/SRbkZHkV/25.png"/>
            </div>
            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4" onClick={() => addMoney("price_1N95MPGRV9kK9sofio1LFR7J", 25)}>Add money</button>
          </div>
        </div>
        <div className="bg-[#ECEEFF] rounded-xl">
        <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-70 md:w-auto">
            <div className="mt-3 font-semibold text-lg">Add to balance 50€</div>
            <div className="text-sm font-light w-60 md:w-auto">
              Up to 200min/free
            </div>
            <div className="flex justify-center mt-3">
                <img className="w-16" src="https://i.postimg.cc/SNQwymTC/50.png"/>
            </div>
            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4" onClick={() => addMoney("price_1N95r1GRV9kK9softBCvdCWa", 50)}>Add money</button>
          </div>
        </div>
      </div>
    </>
  );
};
