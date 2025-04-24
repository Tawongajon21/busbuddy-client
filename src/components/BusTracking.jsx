import React from 'react'
import MainLayout from './MainLayout'
import { Link } from 'react-router-dom'
import {MapContainer,Marker,Popup,TileLayer,useMapEvents} from "react-leaflet"
import {Icon,latLng} from "leaflet"
import { useRef,useEffect } from 'react'
import L from "leaflet"

const myLocation=[-20.1590777,28.6010014,2612]
let defaultZoom=13
function BusTracking() {

  const mapRef=useRef()
  useEffect(() => {
 const {current={}}=mapRef;
 const {leafletElement:map}=current;
 map.locate({
  setView:true
 })
 map.on('locationfound',handleOnLocationFound);
  }, [])
  function handleOnLocationFound(event){
    const {current={}}=mapRef;
    const {leafletElement:map}=current;
    const latlng=event.latLng;
    const radius=event.accuracy;
    const circle= L.circle(latLng,radius);
    circle.addTo(map)
  }



  return (
    <MainLayout>
        <header className="book-ticket-search-header">
          
     <p className="inside-pathway">
         <Link to="/">Back Home {'>'}</Link>  <span className='path-color'>Bus Tracking</span>
    </p>
         
      
        </header>
        <form action="" id='bus-tracking-form' >
             
                <p id='search-p-form' >
                  
                    <input className='input-search' name="" placeholder='Enter the trip Id'/>
                    
                    <button className=''>
                        Search
                    </button>
            
                
                    
                 
                </p>
           
      
            </form>
            <div style={{height:'400px',width:'500px'}}>
<MapContainer ref={mapRef} scrollWheelZoom={false} center={myLocation} zoom={defaultZoom}>
<TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

</MapContainer>
            </div>
    </MainLayout>
  )
}

export default BusTracking