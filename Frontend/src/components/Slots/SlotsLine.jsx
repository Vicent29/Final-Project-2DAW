import { useState } from "react" 


export default function SlotsLine({ slot, deleteSlot, updateSlot }) {
    const [toggle, setToggle] = useState(slot.active)
    return (
        <>
            <td >{slot.id}</td>
            <td >{slot.slug}</td>
            <td>
                {toggle && (
                    <div >
                        <input type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={() => { setToggle(!toggle); updateSlot({ "active": !toggle }, slot.id) }} checked />
                    </div>
                )}
                {!toggle && (
                    <div >
                        <input  type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => { setToggle(!toggle); updateSlot({ "active": !toggle }, slot.id) }} />
                    </div>
                )}
            </td>
            <td >{slot.station}</td>
            <td scope="col" >
                {/* <button type="button" className="btn btn-outline-success border-radius mr-3">Update</button> */}
                <button type="button" onClick={() => deleteSlot(slot.id)}>Delete</button>
            </td>
        </>
    )
}