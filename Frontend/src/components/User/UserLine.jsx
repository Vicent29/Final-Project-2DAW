import { useState } from "react" 

export default function UserLine({ user, changeStatus }) {
    const [toggle, setToggle] = useState(user.is_active)
    return (
        <>
            <td  >{user.id}</td>
            <td className='align-items-center justify-center'><img src={user.avatar ? user.avatar : "https://i.postimg.cc/T3g6d9nk/image.png"} alt="img_bike_rent" className='img_bike_admin rounded-circle img-fluid' /></td>
            <td  >{user.first_name } {user.last_name}</td>
            <td  >{user.email}</td>
            <td  >
                {toggle && (
                    <div  >
                        <input   onChange={() => { setToggle(!toggle); changeStatus(user.id) }} checked />
                    </div>
                )}
                {!toggle && (
                    <div  >
                        <input   onChange={() => { setToggle(!toggle); changeStatus(user.id) }} />
                    </div>
                )}
            </td>
        </>
    )
}