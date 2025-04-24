import React from 'react'

import StepOne from './StepOne'
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import PaymentMethod from "./PaymentMethod"
import POP from './POP'
import { useState,useEffect,useRef ,useCallback} from 'react'

import { Link } from 'react-router-dom'
import { useNavigate ,useLocation} from 'react-router-dom'

import MainLayout from './MainLayout'
import { useParams } from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux'
import { gettrips,gettrip } from '../redux/actions/trips';
import FormLoading from './FormLoading';
import {addpassenger} from "../redux/actions/trips"
import styles from "./styles.css"
import ImageLoader from './ImageLoader'
import ErrorPage from './ErrorPage'
function SingleTrip() {
let location=useLocation()
let userLogin=useSelector((state)=>state.userLogin)
let {userInfo}=userLogin;

    console.log(userInfo);
    let authenticated=userInfo ? true : false ;
  const [isUserAuthenticated, setisUserAuthenticated] = useState(authenticated);
 
    const [formNumber, setformNumber] = useState(0)
    const [departureCity, setdepartureCity] = useState("")
    const [arrivalCity, setarrivalCity] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("")

    const id= useParams().id;
    let tripId=id;
    const trips=useSelector((state)=>state.getTrip);
    const addPassenger=useSelector((state)=>state.addPassenger);
    console.log(addPassenger);
    let {loading,error,data}=trips
    console.log(trips)
    const [seatNumber, setseatNumber] = useState(0)
    const [occupied, setoccupied] = useState(false)
    const [selectedValue, setselectedValue] = useState(1)
   let navigate=useNavigate()

  
    

    

   let previousLocation=location.state?.from
   console.log(previousLocation);
  

    const dispatch=useDispatch();


    useEffect(() => {
      dispatch(gettrip(id))
    
      }, [gettrip,userInfo])
      const [selectedbox, setselectedbox] = useState([])
      const [selectedSeats, setselectedSeats] = useState([])

      function selectSeat(e,index,data) {
        let isSelected=selectedbox.includes(index)
        let boxText=data[index].seatNumber;
        if (isSelected) {
            setselectedbox(selectedbox.filter((i)=>i!==index))
          setselectedSeats(selectedSeats.filter((text)=>text!==boxText))

        }else{
            setselectedbox([...selectedbox,index])
            setselectedSeats([...selectedSeats,boxText])

        }
        let seat=e.target.innerText;
        setseatNumber(seat)
       
console.log(selectedSeats[index]);

      }

  
     
//let data=buses.find((item)=>item.id===id);



    



    const [currentIndex,setCurrentIndex]=useState(0);
    const [progress,setProgress]=useState(0);

    const [modal,setModal]=useState(false);
    function handleNext() {

    //    setCurrentIndex(currentIndex+1)
        
      setstep(step+1)

    }
    function handlePrevious() {
    //    setCurrentIndex((currentIndex-1))
        setstep(step-1)
    }
    function modalfunction() {
        setModal(!modal)
    }
console.log(formNumber);

    const [modalData, setmodalData] = useState([
        {id:1,component:<StepOne  formNumber={formNumber}  setformNumber={setformNumber}/>},
        {id:2,component:<StepTwo />},
        {id:3,component:<StepThree/>},
        {id:4,component:<StepFour/>},
    ])


function getBusFare(from,to) {
    if (loading) {
        return "loading"
    }else if(error){
return "error"
    }
   else if(data){
    let dropOffAreas= data.dropOffAreas;
console.log(dropOffAreas);
    let busFare= dropOffAreas.find((item)=>{
        return item.from.toLowerCase().includes(from.toLowerCase()) && item.to.toLowerCase().includes(to.toLowerCase())
    });
console.log(busFare);

    return busFare.busfare
   } 
    else{
   return "0"
    }
}

console.log(data);
console.log(getBusFare("Norton","Chegutu"));

const [step, setstep] = useState(1)

const [numberOfPeople, setnumberOfPeople] = useState("1")
let tempBusFare=getBusFare(departureCity,arrivalCity)
const [people, setpeople] = useState([
    {
        id:1,
        name:'',
        surname:'',
        phone:'',
        idType:'',
        email:'',
        noOfBags:'',
        nextOfKinContactDetails:'',
        idNumber:'',
       
        busfare:tempBusFare,
        seatNumber:'',
        from:'',
        to:''
      

    }
])


const handleNumPeopleChange=(e)=>{
  setnumberOfPeople(parseInt(e.target.value))
  let newPeople=Array.from({length:parseInt(e.target.value)},(_,i)=>({
id:i+1,
name:'',
surname:'',
phone:'',
idType:'',
email:'',
noOfBags:'',
nextOfKinContactDetails:'',
idNumber:'',

to:'',
from:"",
paymentMethod,
busfare:tempBusFare
  }))

let updatedPeople= newPeople.map((item)=>({
    ...item,
    paid,
    paymentMethod,
    busfare:tempBusFare
    
}))

console.log(updatedPeople);
  setpeople(updatedPeople)

}
console.log(people);

const handleGuestInfoChange=(e,index)=>{
    const newPeople=[...people];
    newPeople[index][e.target.name]=e.target.value;
    newPeople[index].busfare=tempBusFare
    console.log(newPeople);
    setpeople(newPeople)
}
console.log(people);
console.log(selectedSeats);
console.log(paymentMethod);
if (selectedSeats.length!==0) {
    for(let i=0;i<people.length;++i){
        console.log(people);
        people[i].seatNumber=selectedSeats[i]
        }
}
let paid=paymentMethod === "Ecocash" ?  true : paymentMethod=== "Bank Transfer" ?  true :  false;

function handleSubmit(e) {
e.preventDefault()
    console.log("hello");
let newPeople=people.map((item)=>({
    ...item,
    paid,
    paymentMethod
    
}));


for(let i=0;i<newPeople.length;++i){
    if (newPeople[i].name==="" || newPeople[i].surname===""|| newPeople[i].phone ==="" || newPeople[i].email===""||newPeople[i].to===""|| newPeople[i].from===""||newPeople[i].busfare===""||newPeople[i].seatNumber===""||newPeople[i].nextOfKinContactDetails===""||newPeople[i].idNumber===""||newPeople[i].noOfBags===""||paymentMethod==="") {
        alert("There are form fields that you did not fill in")
    }else{

        dispatch(addpassenger(newPeople[i].name,newPeople[i].surname,newPeople[i].phone,newPeople[i].email,newPeople[i].from,newPeople[i].to,data.bus[0]._id,newPeople[i].busfare,newPeople[i].seatNumber,newPeople[i].nextOfKinContactDetails,tripId,newPeople[i].idType,newPeople[i].idNumber,newPeople[i].noOfBags,paymentMethod))

    }
   
}

//

   // name,surname,phone,email,dropOffArea,bus,busfare,seatNumber,nextOfKinNumber,tripId:id,idNumber,idType,noOfBags,paid,paymentMethod
}


let newImageArray
/*
let getImages=loading ? "loading": error ? "error":data.bus.map((item)=>{
  newImageArray= item.images
})
*/

  return (
    <MainLayout>
        <div className="single-trip-layout">
        {
       
       trips.loading ? <div className='data-loading'><FormLoading/></div>  : trips.error ? "error" :  data ?
       <>
        <header className="book-ticket-search-header">

<>

<p id='single-trip-nav' className="inside-pathway">
<Link to="/">Home </Link>{'>'} <Link to="/book-tickets"> Book Tickets</Link> {'>'} {data.from} - {data.to} <span className='path-color'></span>
</p>
</>


</header>

<div className='singe-trip'>

<div className="details-image-component">
    {
        data.bus[0].images.map((item)=>(
<ImageLoader  item={item}  className={"details-image"}/>
        ))
    }



</div>



<div class="details-info">
<ul>
   <li>
       <h4>
          Bus name : {data.bus[0].company} {data.bus[0].busName}
       </h4>
   </li>
   <li>
       <h4>
          Route: {data.from} to  {data.to} 
       </h4>
   </li>
   <li>
       <h4>
          Date of departure:  {data.departure}
       </h4>
   </li>
   <li>
       <h4>
         Expected date of arrival:  {data.arrival}
       </h4>
   </li>
   <li>
       <h4>
           Bus capacity : {data.capacity}
       </h4>
   </li>
   <li>
       <h4>
           Seats booked : {data.passengers.length}
       </h4>
   </li>
   <li>
       <h4>
         Bus fare: ${data.busfare}
       </h4>
   </li>
   <li>
       <button onClick={userInfo === undefined  ?  ()=>{
navigate("/signup",{state:{from:location.pathname}})
       }   : 
       userInfo === null ? 
       ()=>{
        navigate("/signup",{state:{from:location.pathname}})
               }  
       :
       ()=>modalfunction() } id="open-modal-button" class="btn-search">
           Book
       </button>
   </li>

</ul>

</div>
{
modal &&  <div class="modal" id="myModal">
  
<div class="modal-content">
    <div className="modal-progress">
       <div style={{width:`${((step)/5)*100}%`}} className="progress-bar-fill"></div>
    
   </div>
   <span onClick={()=>modalfunction()} id="closeModalBtn" class="close">
&times;
   </span>
{

step === 1 &&(
    <>
    <h3>
How many people are you booking for?
</h3>
<div class="booking-number">
<p class="booking-p">
  <label for="">No. of people</label>
  <select value={numberOfPeople} onChange={handleNumPeopleChange} class="booking-input" name="" id="">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
  </select>
</p>

</div>

</>
)


}

{
    step===2 && (
        people.map((person,index)=>(
            <>
            <h3>
                         Enter personal details {index+1}/{people.length}
                      </h3>
          <div class="booking-form">
                      <div class="booking-left">
                          <p class="booking-p">
                              <label for="">Name</label>
                              <input required name='name' value={person.name} onChange={(e)=>handleGuestInfoChange(e,index)} class="booking-input" type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">Surname</label>
                              <input required name='surname' value={person.surname} onChange={(e)=>handleGuestInfoChange(e,index)}  class="booking-input" type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">Contact Details</label>
                              <input required name='phone' value={person.phone} onChange={(e)=>handleGuestInfoChange(e,index)}  class="booking-input" type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">ID Type</label>
                              <select required value={person.idType} onChange={(e)=>handleGuestInfoChange(e,index)} class="booking-input" name="idType" id="">
                                  <option value="">Enter ID Type</option>
                                  <option value="passport">Passport</option>
                                  <option value="Id Number">Id Number</option>
                                  <option value="driver's license">Driver's License</option>
                                  <option value="birthCertificate">Birth Certificate</option>
                              </select>
                          </p>
                          <p class="booking-p">
                              <label for="">Pick up city</label>
                              <select  required name="from"  value={person.from} onChange={(e)=>{
                                
                                handleGuestInfoChange(e,index)
                                setdepartureCity(person.from)
                                }}class="booking-input"  id="">
                              <option>Select Pick up city</option>
                              {
                                [...new Set(data.dropOffAreas.map(item=>item.from))]
                                .map(from=>(
                                    <option value={from}>{from}</option>
                                ))
                         
                          
                            
                              }
                                        </select>
                          </p>
                      </div>
                      <div class="booking-right">
                          <p class="booking-p">
                              <label for="">Email address</label>
                              <input required value={person.email} name='email' onChange={(e)=>handleGuestInfoChange(e,index)} class="booking-input" type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">No. of bags</label>
                              <select  required name="noOfBags"  value={person.noOfBags} onChange={(e)=>handleGuestInfoChange(e,index)}class="booking-input"  id="">
                             
                                  <option value="1">Select the number of bags</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                              </select>
                          </p>
                        
                          <p class="booking-p">
                              <label for="">Next of Kin Contact details</label>
                              <input required value={person.nextOfKinContactDetails} onChange={(e)=>handleGuestInfoChange(e,index)} name='nextOfKinContactDetails' class="booking-input" type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">ID Number</label>
                              <input required name='idNumber' value={person.idNumber} onChange={(e)=>handleGuestInfoChange(e,index)} class="booking-input" type="text"/>
                          </p>
                          <p class="booking-p">
                              <label for="">Drop off Area</label>
                              <select  required name="to"  value={person.to} onChange={(e)=>{
                                handleGuestInfoChange(e,index)
                                setarrivalCity(person.to)
                                }}class="booking-input"  id="">
                              <option>Select drop off city</option>
                              {
                                [...new Set(data.dropOffAreas.map(item=>item.to))]
                                .map(to=>(
                                    <option value={to}>{to}</option>
                                ))
                         
                          
                            
                              }
                                        </select>
                          </p>
                          <p class="booking-p">
                              <label for="">Bus Fare</label>
                              <input  disabled name='busfare' value={getBusFare(departureCity,arrivalCity)} onChange={(e)=>handleGuestInfoChange(e,index)} class="booking-input" type="text"/>
                          </p>
                     
                      </div>
                      </div>
                     
        </>
        ))
    )
}
{
    step===3 && (
        <StepThree selectSeat={selectSeat} data={data} loading={loading} error={error} selectedbox={selectedbox} occupied={occupied}/>
    )
}
{
    step===4 && (
        <PaymentMethod paymentMethod={paymentMethod}  setPaymentMethod={setPaymentMethod}/>
    )
}


{
    step === 5 && (
        <StepFour   selectedSeats={selectedSeats} addPassenger={addPassenger} handleSubmit={handleSubmit} busfare={data.busfare} people={people} paymentMethod={paymentMethod}/>
    )
}

{

<p className='progress-btns'>
{
step <1  ?    <button onClick={()=>handleNext()}>Next</button> :  
step>=5 ?    <button onClick={()=>handlePrevious()}>Previous</button>
:
<>
<button onClick={()=>handlePrevious()}>Previous</button>
<button onClick={()=>handleNext()}>Next</button>
</>

}

</p>

}


   {
       /**  <!--
        *  <StepOne/>
       How many people am i booking for


   <h3>
       How many people are you booking for?
    </h3>
   <div class="booking-number">
       <p class="booking-p">
           <label for="">No. of people</label>
           <select class="booking-input" name="" id="">
               <option value="0">0</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
           </select>
       </p>
       <div class="cta-progress">
           <a href="">Next</a>
       </div>
   </div>
  -->*/
  
   }
    

    {
       /**    <!--
   Pick seats
 
  <h3>Pick your seats</h3>
  <div class="seats-container">
   <div class="seat">
       1
   </div>
   <div id="occupied-seat" class="seat">
       2
   </div>
   <div class="seat">
       3
   </div>
   <div class="seat">
       4
   </div>
   <div class="seat">
       5
   </div>
   <div class="seat">
       6
   </div>
   <div class="seat">
       7
   </div>
   <div class="seat">
       8
   </div>
   <div class="seat">
       9
   </div>
   <div class="seat">
       10
   </div>
   <div class="seat">
       11
   </div>
   <div class="seat">
       12
   </div>
   <div class="seat">
       13
   </div>
   <div class="seat">
       14
   </div>
   <div class="seat">
       15
   </div>
   <div class="seat">
       16
   </div>
   <div class="seat">
       17
   </div>
   <div class="seat">
       18
   </div>
   <div class="seat">
       19
   </div>
   <div class="seat">
       20
   </div>
   <div class="seat">
       21
   </div>
   <div class="seat">
       22
   </div>
   <div class="seat">
       23
   </div>
   <div class="seat">
       24
   </div>
   <div class="seat">
       25
   </div>
   <div class="seat">
       26
   </div>
   <div class="seat">
       27
   </div>
   <div class="seat">
       28
   </div>
   <div class="seat">
       29
   </div>
   <div class="seat">
       30
   </div>
   <div class="seat">
       31
   </div>
   <div class="seat">
       32
   </div>
   <div class="seat">
       33
   </div>
   <div class="seat">
       34
   </div>
   <div class="seat">
       35
   </div>
   <div class="seat">
       36
   </div>
   <div class="seat">
       37
   </div>
   <div class="seat">
       38
   </div>
   <div class="seat">
       39
   </div>
   <div class="seat">
       40
   </div>
  </div>
   -->
*/
    }



{
/**
* <!--
Booking summary
-->
* <h3>
Booking summary
</h3>
<table>
<thead>
<tr>
<th>No.</th>
<th>Seat No.</th>
<th>Item</th>
<th>Cost ($)</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>10</td>
<td>Reginald Jongwe Bus Fare</td>
<td>20</td>
<td>
<a href="">Edit</a>
<a href="">Delete</a>
</td>
</tr>
<tr>
<td>2</td>
<td>20</td>
<td>Reginald Jongwe Bus Fare</td>
<td>20</td>
<td>
<a href="">Edit</a>
<a href="">Delete</a>
</td>
</tr>
<tr>
<td>3</td>
<td>30</td>
<td>Reginald Jongwe Bus Fare</td>
<td>20</td>
<td>
<a href="">Edit</a>
<a href="">Delete</a>
</td>
</tr>
<tr>
<td>4</td>
<td>40</td>
<td>Luggage x 4 (2.5 extra bag)</td>
<td>8</td>
<td>
<a href="">Edit</a>
<a href="">Delete</a>
</td>
</tr>
<tr>
<td><b>Total Price</b></td>
<td></td>
<td></td>
<td><b>$200</b></td>

</tr>

</tbody>


</table>
<div class="div-button-pay">
<button class="btn-search">Pay</button>
</div>
*/
}




{
/**      <!--
       Personal details form
<h3>
      Enter personal details
   </h3>

  <div class="booking-form">
   <div class="booking-left">
       <p class="booking-p">
           <label for="">Name</label>
           <input class="booking-input" type="text">
       </p>
       <p class="booking-p">
           <label for="">Surname</label>
           <input class="booking-input" type="text">
       </p>
       <p class="booking-p">
           <label for="">Contact Details</label>
           <input class="booking-input" type="text">
       </p>
 
   </div>
   <div class="booking-right">
       <p class="booking-p">
           <label for="">Email address</label>
           <input class="booking-input" type="text">
       </p>
       <p class="booking-p">
           <label for="">No. of bags</label>
           <select class="booking-input" name="" id="">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
           </select>
       </p>
       <p class="booking-p">
           <label for="">Drop off area</label>
           <select class="booking-input" name="" id="">
               <option value="1">Hurungwe</option>
               <option value="2">Shurugwi</option>
               <option value="3">Mpandawana</option>
               <option value="4">Chihota</option>
           </select>
       </p>
  
   </div>
   <div class="booking-pay">
       <p>
           The total fee is <b>$245</b>
       </p>
       <button class="btn-search">
           Pay
       </button>
   </div>
  </div>
   -->
  */
}

</div>
</div>
}





</div>
       
       </>
   :
   null

   }
        </div>
  
       


</MainLayout>
 
  )
}

export default SingleTrip