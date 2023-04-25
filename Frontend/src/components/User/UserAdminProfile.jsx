import React, { useEffect, useState } from "react";
import { useIncident } from "../../hooks/useIncident";

export default function UserAdminProfile() {
    const { incs, setInc, getAllInc, closeInc } = useIncident()
    const [message, setMessage] = useState({})

    useEffect(() => {
        getAllInc();
    }, [])

    const relaodInc = () => {
        setInc(incs.filter((inc) => {
            return inc.id !== message.id
        }))

    }
    // const close = async (rent) => {
    //     console.log(rent);
    //     console.log(getValues().slot);
    //     await closeRent(rent.id, { "bike": rent.bike, "slot": getValues().slot })
    //     getRentsByUser();
    // }

    return (
        <>
            <div  >
                <table  >
                    <thead  >
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Specify</th>
                            <th scope="col">Desc</th>
                        </tr>
                    </thead>
                    <tbody  >
                        {incs.map((inc, id) => {
                            return (
                                <tr key={id}>
                                    <td>{inc.user}</td>
                                    <td>{inc.bike ? "bike " + inc.bike : inc.slot ? "slot " + inc.slot : "loc " + inc.location}</td>
                                    <td>{inc.desc}</td>
                                    <td><button onClick={(e) => setMessage({ ...message, id: inc.id, user: inc.user, type: inc.bike ? "bike" : inc.slot ? "slot" : "other" })} data-bs-toggle="modal" data-bs-target="#modal_inc">Response</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div  >
                <div  >
                    <div  >
                        <div  >
                            <h5  >Close Incidence</h5>
                            <button type="button"  ></button>
                        </div>
                        <div  >
                            <input type="text"   />
                        </div>
                        <div  >
                            <button type="button"  >Close</button>
                            <button type="button"   onClick={() => { closeInc(message); relaodInc() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


