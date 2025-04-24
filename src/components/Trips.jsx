import React from 'react'
import TripsHeader from './tripheader'
import Trip from './Trip'
function Trips() {
  return (
    <div className='trips-container'>
    <TripsHeader heading="Harare to Mutare"/>
    <div className="trips">
    <Trip/>
    <Trip/>
    <Trip/>
    <Trip/>
    <Trip/>
    <Trip/>
    <Trip/>
    <Trip/>
    </div>

    </div>
  )
}

export default Trips