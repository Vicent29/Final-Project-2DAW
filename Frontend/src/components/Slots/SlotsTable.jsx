import SlotsLine from "./SlotsLine"
import SlotsForm from "./SlotsForm";

export default function SlotsTable({slots, deleteSlot, updateSlot}) {
    return (
        <div  >
            <SlotsForm></SlotsForm>
            <table  >
                <thead   >
                    <tr  >
                        <th className='col-1'>ID</th>
                        <th className='col-1'>Slug</th>
                        <th className='col-1'>Active</th>
                        <th className='col-1'>Station</th>
                        <th className='col-2' scope="col">
                            <button  >New Slot</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {slots.map(item => {
                        return <tr key={item.id}><SlotsLine slot={item} updateSlot={updateSlot} deleteSlot={deleteSlot} /></tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}