import React from 'react'

export default function Rent({ bike, changestatus, createRnt }) {

    return (
        <div className='d-flex justify-center align-middle m-1'>
            <div  >
                <img   />
                <div  >
                    <h5  >{bike.slug}</h5>
                    <h6  >You want to reserve it?</h6>
                    <div className='d-flex justify-evenly'>
                        <button type='button' className='btn btn-outline-info' onClick={(e) => { createRnt({ "bike": bike.id, "slug": bike.slug }) }}>Confirm</button>
                        <button type='button' className='btn btn-outline-danger' onClick={changestatus}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}