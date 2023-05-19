import React, {useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRent } from "../../hooks/useRent";
import { useSlots } from "../../hooks/useSlots";
import AuthContextProvider from '../../context/AuthContext'
import "./User.scss";


export default function UserRentProfile() {
    const { rents, getRentsByUser, closeRent } = useRent();
    const { slots, setSlots, getSlotsnoBike } = useSlots();
    const [valueslot, setSlotValue] = useState();
    const { register, handleSubmit, getValues } = useForm();
    const { user, setUser } = useContext(AuthContextProvider);

    useEffect(() => {
        getRentsByUser();
        getSlotsnoBike();
    }, [])

    const close = async (rent) => {
        await closeRent(rent.id, { "bike": rent.bike, "slot": getValues().slot })
        getRentsByUser();
    }


    return (
        <>
            <div className="">
                <table className="text-center table table-striped mb-0 table-dark">
                    <thead className="bord_thead align-baseline">
                        <tr>
                            <th scope="col">Minutes</th>
                            <th scope="col">Bike</th>
                            <th scope="col">Cost</th>
                            <th className="flex justify-center items-center">
                                <div className="w-50 flex justify-center items-center">
                                    <div className="flex flex-col max-w-md">
                                        <button id='addMoney' className="text-white bg-[#347c10]  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => {setUser({...user, opt_profile : false, opt_balance: true })} }>Deposit Money</button>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="align-baseline">
                        {rents.map((rent) => {
                            return (
                                <tr key={rent.id}>
                                    <td>{new Date(new Date(rent.data_fin) - new Date(rent.data_ini)).getMinutes()}</td>
                                    <td>{rent.bike}</td>
                                    {rent.cost == 0 ?
                                        <>
                                            <td>Not finished</td>
                                            <td>
                                                <select name="" id="" className="bg-transparent" {...register("slot", { required: true })}>
                                                    {slots.map((slot) => {
                                                        return <option key={slot.id} value={slot.id} className="text-black">{slot.id} {slot.slug}</option>
                                                    })}
                                                </select>
                                                <button id="leaveBike" className="btn btn-primary ml-4" onClick={() => close(rent)}>Leave</button>
                                            </td>
                                        </>
                                        :
                                        <>
                                            <td>{rent.cost + " €"}</td>
                                            <td>No options</td>
                                        </>
                                    }

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}


