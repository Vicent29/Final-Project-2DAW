import React from "react"
import { useForm } from "react-hook-form"
import { useTel } from "../../hooks/useTel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Announce() {

    const { register, handleSubmit } = useForm()
    const { sendMessage, allchatid } = useTel()

    const send = async (data) => {
        let chatids = await allchatid();
        chatids.map(async (id) => { await sendMessage(id, data.message) });
    }

    return (
        <>
            <a  >
                <FontAwesomeIcon   />
            </a>

            <div  >
                <div  >
                    <div  >
                        <div  >
                            <h5  >ANNOUNCE</h5>
                            <button type="button"  ></button>
                        </div>
                        <div  >
                            <input type="text"   />
                        </div>
                        <div  >
                            <button type="button"  >Close</button>
                            <button type="button"   onClick={handleSubmit(send)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}