import React from 'react'
import { useBikes } from '../../hooks/useBikes'
import { useSlots } from '../../hooks/useSlots'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

export default function FormBike() {
    const { createBike } = useBikes()
    const { slots, getSlotsnoBike } = useSlots()
    const { register, handleSubmit, formState: { errors } } = useForm()

    useEffect(() => {
        getSlotsnoBike()
    }, [])

    return (
        <div  >
                <div  >
                    <div  >
                        <div  >
                            <h5  ><i><b>Create a NEW BIKE:</b></i></h5>
                            <button type="button"  ></button>
                        </div>
                        <div  >
                        <form className='flex justify-center flex-col' onSubmit={handleSubmit(createBike)}>
                            <label className='font-bold text-left mb-1'>Slot:</label>
                            <select className='mb-3 block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name="" id="" {...register("slot", { required: false })}>
                                <option value="">Null</option>
                                {slots.map((item, id) => {
                                    return <option key={id} value={item.id}>{item.slug}</option>
                                })}
                            </select>

                            <label className='font-bold text-left mb-1'>Img:</label>
                            <input className='mb-3 block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" {...register("img_bike", { required: false })} placeholder="Img Path" />
                            {errors.img_bike?.type === 'required' && <span className='text-red-600'>*Img is required</span>}
                            
                            <label className='font-bold text-left mb-1'>Price for minute:</label>
                            <input className='mb-3 block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="number" step="0.005" {...register("pfm", { required: true })} placeholder='Price for minute' />
                            {errors.pfm?.type === 'required' && <span className='text-red-600'>*PFM is required</span>}
                            
                            <label className='font-bold text-left mb-1'>Status Bike:</label>
                            <label  >
                                <input type="checkbox" value={true} {...register("status", { required: false })}   ></input>
                                <div  ></div>
                            </label>

                            <div  >
                                <button  >Create</button>
                                <button type="button"  >Close</button>
                            </div>

                        </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}