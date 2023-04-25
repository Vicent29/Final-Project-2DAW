import React, { useContext, useState } from 'react'
import Rent from '../Rent/Rent';
import AuthContextProvider from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useRent } from '../../hooks/useRent';

export default function BikeCard({ bike, createRnt }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(true)
    const { user } = useContext(AuthContextProvider)

    const handleclick = () => {
        if (user) {
            setShow(!show)
        } else {
            navigate("/signin")
        }
    }

    return (
        <>
            {show && (
                <div className='d-flex justify-center align-middle m-1'>
                    <div   onClick={handleclick}>
                        <img   />
                        <div  >
                            <h5  >{bike.slug}</h5>
                            <p  >GreenWheel bicycle: ecological, economical ({bike.pfm}€/min) and comfortable. Rent it today!</p>
                        </div>
                    </div>
                </div>
            )}
            {!show && (
                <Rent bike={bike} changestatus={handleclick} createRnt={createRnt} />
            )}
        </>
    )
}