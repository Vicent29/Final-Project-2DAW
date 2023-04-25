import MyMap from '../../components/Map/mapadmin'
import FormStation from '../../components/Stations/FormStations'
import { useStations } from '../../hooks/useStations'

export default function CreateStation() {
    const { createStation } = useStations()
    let lat
    let long
    const location = (e) => {
        lat = e.lat
        long = e.lng
        console.log(e);
    }

    const createStationForm = (request) => {
        if (lat !== undefined || long !== undefined) {
            createStation({ ...request, lat: lat, long: long })
        } else {
            console.log("lat and long not used");
        }
    }

    return (
        <>
            <div  >
                <div  >
                    <h1>Click to set Station</h1>
                    <MyMap onclickmap={location} />
                </div>
                <div  >
                    <FormStation createStation={createStationForm} />
                </div>
            </div>
        </>
    )
}