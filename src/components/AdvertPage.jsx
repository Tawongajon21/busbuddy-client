import React from 'react'

import { useState,useEffect } from 'react'
import imageThree from "../images/sun.jpg"
import imageOne from "../images/pexel-four.jpg" 
import imageTwo from "../images/sun2.jpg" 
import imageFour from "../images/sky2.jpg"
import imageFive from "../images/dragon.jpg"
import imageSeven from "../images/photo4.jpg"
import imageSix from "../images/photo1.jpg"
import imageEight from "../images/pexel-one.jpg";
import imageNine from "../images/pexel-two.png";
import imageTen from "../images/pexel-three.jpg";
import imageEleven from "../images/pexels-rdne-7362883.jpg"
import bookingPhoto from "../images/phototwo.jpg"


import Heading from './heading'
import Trips from './Trips'
import Layout from './Layout'
import MainLayout from './MainLayout'
import { Link } from 'react-router-dom'
function AdvertPage() {
const [words, setwords] = useState(["easily online","from the comfort of your home"])
const [currentIndex,setCurrentIndex]=useState(0)

useEffect(()=>{
const intervalId=setInterval(()=>{
    setCurrentIndex((currentIndex+1)%words.length)
},2000)
return ()=>{
    clearInterval(intervalId)
}
},[words,currentIndex])

  return (
<MainLayout>
<section className='advert-section'>
    <h1>
    Book buses <span className='distinct-text'>{words[currentIndex]}</span> 
    </h1>
   
</section>
<div className="selection-options">
  
    <Link to='/book-tickets' className='selection-option'>
       <main className="selection-text">
        <h3>
            Buy Tickets
        </h3>
       </main>
       <div  style={{
        width:"300px",
        height:"130px",
        display:"flex",
        justifySelf:"right",
        backgroundImage:`url(${imageOne})`,
        backgroundSize:"cover",
        backgroundPosition:"center"


       }} className="selection-image">
       
       </div>
    </Link>
    <Link to='/book-tickets' className='selection-option'>
       <main className="selection-text">
        <h3>
            Browse Journeys
        </h3>
       </main>
       <div  style={{
        width:"300px",
        height:"130px",
        display:"flex",
        justifySelf:"right",
        backgroundImage:`url(${imageEight})`,
        backgroundSize:"cover",
        backgroundPosition:"center"


       }} className="selection-image">

     
       </div>
    </Link>
    <Link to='/bookings' className='selection-option'>
       <main className="selection-text">
        <h3>
          Booked Journeys
        </h3>
       </main>
       <div   style={{
        width:"300px",
        height:"130px",
      
        display:"flex",
        justifySelf:"right",
        backgroundImage:`url(${imageNine})`,
        
        backgroundSize:"cover"


       }}       className="selection-image">
      
       </div>
    </Link>
    <Link  to='/booking-history' className='selection-option'>
       <main className="selection-text">
        <h3>
            Booking History
        </h3>
       </main>
       <div  style={{
        width:"300px",
        height:"130px",
      
        display:"flex",
        justifySelf:"right",
        backgroundImage:`url(${imageTen})`,
        
        backgroundSize:"cover"


       }} className="selection-image">
      
       </div>
    </Link> 
    <Link to='/bus-tracking' className='selection-option'>
       <main className="selection-text">
        <h3>
         Bus Tracking
        </h3>
       </main>
       <div   style={{
        width:"300px",
        height:"130px",
      
        display:"flex",
        justifySelf:"right",
        backgroundImage:`url(${imageEleven})`,
        
        backgroundSize:"cover"


       }}  className="selection-image">
    
       </div>
    </Link>
    <Link to='/hello' className='selection-option'>
       <main className="selection-text">
        <h3>
          Route Maps
        </h3>
       </main>
       <div className="selection-image">
        <img src={imageFive} className='image-selection-option' alt="image-selection-option" />
       </div>
    </Link>
    

  
</div>
<div className="download-options">
    <header className='download-options-header'>
<h3>
    We also have mobile application for both android and iOs
</h3>
    </header>

    <div className="download">
        <p>
            <a href="">Android</a>
        </p>
        <p>
            <a href="">iOS</a>
        </p>
    </div>
</div>
<div className="testimonials-container">
<header id="testimonial-header"className='download-options-header'>
<h3>
  Testimonials
</h3>
    </header>
<section className="testimonials">
    <div className="testimony">
       
        <img  className='testimony-image' src={imageThree} />
      
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>
    <div className="testimony">
        <div className="testimony-img-div">
        <img  className='testimony-image' src={imageThree} />
        </div>
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>
    <div className="testimony">
        <div className="testimony-img-div">
        <img  className='testimony-image' src={imageThree} />
        </div>
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>
    <div className="testimony">
        <div className="testimony-img-div">
        <img  className='testimony-image' src={imageThree} />
        </div>
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>
    <div className="testimony">
        <div className="testimony-img-div">
        <img  className='testimony-image' src={imageThree} />
        </div>
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>
    <div className="testimony">
        <div className="testimony-img-div">
        <img  className='testimony-image' src={imageThree} />
        </div>
        <div className="testimony-text">
            <p className='testimony-name'>
<b>John Doe</b>
            </p>
            <p className="testimony-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non doloribus minus. Ullam, vero voluptatum?
            </p>
        </div>
      
    </div>

</section>
</div>

</MainLayout>
 
  )
}

export default AdvertPage

{
    /**     <div className='advert-page'>
<section className="advert-header">
    <h2>
        Book buses easy and fast with <span className='advert-brand'>busbuddy.</span>
    </h2>
</section>
<div className="advert-image-div">
    <img className='advert-image' src={currentImage} alt="Advert image" />
</div>

    </div>
    <Trips/> */
}