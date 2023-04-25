import React from 'react'
import { useSlots } from '../../hooks/useSlots'
import { useStations } from '../../hooks/useStations'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

export default function FormBike() {
    const { stations, getStationsMap } = useStations()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createSlot} = useSlots()

    useEffect(() => {
        getStationsMap()
    }, [])

    return (
        <div  >
                <div  >
                    <div  >
                        <div  >
                            <h5  ><i><b>Create a NEW SLOT:</b></i></h5>
                            <button type="button"  ></button>
                        </div>
                        <div  >
                        <form className='flex justify-center flex-col' onSubmit={handleSubmit(createSlot)}>
                            <label className='font-bold text-left mb-1'>Station:</label>
                            <select className='mb-3 block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name="" id="" {...register("station", { required: true })}>
                                <option value="">Null</option>
                                {stations.map((item, id) => {
                                    return <option key={id} value={item.id}>{item.slug}</option>
                                })}
                            </select>
                            {errors.station_id?.type === 'required' && <span className='text-red-600'>*Station is required</span>}
                            
                            <label className='font-bold text-left mb-1'>Status Slot:</label>
                            <label  >
                                <input type="checkbox" value={true} {...register("active", { required: false })}   ></input>
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