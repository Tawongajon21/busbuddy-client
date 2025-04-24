import React from 'react'

import MainLayout from './MainLayout'
import { Link } from 'react-router-dom'
import FormLoading from './FormLoading'
import EmptyJourney from './EmptyJourney'
import ErrorPage from './ErrorPage'
import moment from 'moment/moment'
import { useRef } from 'react'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getusertrips,cancelusertrips } from '../redux/actions/trips';
import { useEffect,useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import qrCode from "../images/qrCode.jpg"
import { useMemo } from 'react'
function MyBookings(props) {

    const contentRef=useRef(null)
    console.log(props);
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const trips=useSelector((state)=>state.getPassengerTrips);
let   {loading,error,data}=trips;
let userLogin=useSelector((state)=>state.userLogin)
const [isDownloading, setisDownloading] = useState(false)
const [isReady, setisReady] = useState(false)
let {userInfo}=userLogin;
    useEffect(() => {
        dispatch(getusertrips())
      
        }, [getusertrips])
        
        if (!userInfo) {
            setTimeout(()=>{
                navigate('/signin')
            },1500)
          
        }

     
        useLayoutEffect(()=>{
if (data) {
    setisReady(true)
}
        },[data])

const handleDownload=(name,surname)=>{
  console.log(contentRef.current);
  if (isReady) {
    html2canvas(contentRef.current).then((canvas)=>{
  
        const pdf=new jsPDF();
        const imgData=canvas.toDataURL('image/png')
        const pdfWidth=pdf.internal.pageSize.width;
        const pdfHeight=pdf.internal.pageSize.height;
        const imgHeight=pdfHeight*0.5;
        const imgWidth=(canvas.width*imgHeight)/canvas.height;
      
        const x=(pdfWidth-imgWidth)/2;
        const y=(pdfHeight-imgHeight)/2
        pdf.addImage(imgData,'PNG',x,y,imgWidth,imgHeight)
        pdf.save(`${name} ${surname}.pdf`)
        
    
    })
  }

}

const memoizedData=useMemo(()=>{
    if (loading) {
      return null
    }
    if (error) {
      return null
    }
    return data
  },[data,loading,error])
  
  return (
    <MainLayout>

    <div className='booking-div'>
    <div class="back-to-result">
            <Link to="/">Back home</Link>
            <p>
                Home {'>'} Booked Journeys
            </p>

        </div>



        {
            loading ? <FormLoading/> : error ? <ErrorPage/> : data?.length===0 ? <EmptyJourney/>:
         data ?
         <div className="tickets">
            {
   memoizedData.map((item)=>(
            <div ref={contentRef} key={item._id} className="ticket">
            <div className="top-ticket">
                <div>
                    <h3>
                   {item.from}
                    </h3>
                    
                </div>
                <div>
                    <h3>
                    -
                    </h3>
                  
                </div>
                <div>
                <h3>
                {item.to}
                    </h3>
                </div>
            </div>
            <div className="middle-ticket">
                <div className="ticket-left">
                    <main className="ticket-item">
                        <p>
        Passenger name
                        </p>
                        <h4>
        {item.name} {item.surname}
                        </h4>
                    </main>
                    <main className="ticket-item">
                        <p>
        Seat Number
                        </p>
                        <h4>
       {item.seatNumber}
                        </h4>
                    </main>
                    <main className="ticket-item">
                        <p>
        Departure
                        </p>
                        <h4>
                            {
                                moment(item.departure).format("DD MMM YYYY HHmm")
                            }
      
                        </h4>
                    
                    </main>
                </div>
                <div className="ticket-right">
                    <main className="ticket-item">
                        <p>
        Price
                        </p>
                        <h4>
        ${item.busfare}
                        </h4>
                    </main>
                    <main className="ticket-item">
                        <p>
        Payment method
                        </p>
                        <h4>
     {item.paymentMethod}
                        </h4>
                    </main>
                    <main className="ticket-item">
                        <p>
        Arrival
                        </p>
                        <h4>
                            {
                                moment(item.arrival).format("DD MMM YYYY HHmm")
                            }
      
                        </h4>
                  
                    </main>
                </div>
               
            </div>
            <div className="underline"></div>
            <div style={{
              width: "400px",
              height: "400px",
              backgroundImage:`url(${qrCode})`,
              backgroundSize:"cover"
        }}  className="ticket-bottom">
        
                </div>
                <div  className="cta-ticket">
                    {
                       
                            <button onClick={()=>handleDownload(item.name,item.surname)} className='cta-button'>


                            Download Ticket
                        </button>
                      
                    }
                   
                </div>
          </div>
         ))
    }
         
         </div>
      
         : error    ? <ErrorPage/> : null
        }





    
  
          
       
             
    </div>
         
        </MainLayout>
  )
}
MyBookings.defaultProps={
    name:"World",
    surname:"Jongwe"
}

export default MyBookings

