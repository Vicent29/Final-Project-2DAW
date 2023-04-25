import React from "react";
import { Link } from "react-router-dom";
import BikesLine from "./BikesLine";
import FormBike from "./BikeForm";

export default function BikesTable({bikes, slots, deleteBike , changeStatusBike, updateBike}) {
  return (
    <div  >
      <FormBike/>
      <table  >
        <thead   >
          <tr  fixed>
            <th>ID</th>
            <th>ID_slot</th>
            <th>Status</th>
            <th>PFM</th>
            <th>Img_bike</th>
            <th scope="col">
              <button  >New Bike</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {bikes.map((item) => {
            return (
              <tr key={item.id}>
                <BikesLine bike={item} slots={slots} deleteBike={deleteBike} changeStatusBike={changeStatusBike} updateBike={updateBike}/>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


