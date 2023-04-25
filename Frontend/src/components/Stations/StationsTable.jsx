import React, {useState} from 'react'
import MyMap from '../../components/Map/mapadmin'
import { Link } from 'react-router-dom'
import StationLine from './StationsLine'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StationsTable({ stations, deleteStation, updateStation}) {

  const [location, setLocation] = useState({
    lat: 'click map',
    long: 'click map'
  });
  const Newlocation = (e) => {
    setLocation({...location,'lat':e.lat, 'long':e.lng})
  }

  const coppyLong = async () => {
    await navigator.clipboard.writeText(location.long);
  }

  const coppyLat = async () => {
    await navigator.clipboard.writeText(location.lat);
  }

    return (
      <>
        <div  >
          <table  >
            <thead   >
              <tr  >
                <th className='col-1'>ID</th>
                <th className='col-1'>Name</th>
                <th className='col-1'>Long</th>
                <th className='col-1'>Lat</th>
                <th className='col-2'>Img</th>
                <th className='col-2' scope="col">
                  <Link to="/addstation">
                    <button  >New Station</button>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {stations.map(item => {
                  return <tr key={item.id}><StationLine station={item} deleteStation={deleteStation} updateStation={updateStation}/></tr>
              })}
            </tbody>
          </table> 
        </div>
        <div className='lg:w-[70%]  lg:ml-[15%] lg:mb-[4%] rounded'>
          <h1 className='text-white font-bold underline'>The Stations in Map</h1>
          <div className='row  flex justify-start' >
            <div className='col '>
                <p className='text-white m-3 col-7 text-left flex'>Longitud <FontAwesomeIcon   /></p> 
                <p className='border col text-center mr-6-lg p-3 text-white'>{location.long}</p>
            </div>
            <div className='col'>
                <p className='text-white m-3  text-left flex mr-8  col-7'>Latitud <FontAwesomeIcon   /></p> 
                <p className='text-white ml-3-lg border col text-center p-3'>{location.lat}</p>
            </div>
          </div>
          <MyMap onclickmap={Newlocation} />
      </div>
     </>
    );
}