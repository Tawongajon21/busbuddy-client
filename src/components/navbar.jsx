import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {userLogout} from "../redux/actions/user"
import {FaBell} from "react-icons/fa"
import { useEffect,useState } from 'react'
import { getnotifications,recievenotification } from '../redux/actions/notifications'
import NotificationComponent from './NotificationComponent'
import  io  from 'socket.io-client'
import store from '../redux/store'
import { baseUrl } from '../redux/actions/baseUrl'

function Navbar() {
    let userLogin=useSelector((state)=>state.userLogin)
    let notifications=useSelector((state)=>state.notifications)
    let readNotifications= notifications.notifications.filter((item)=>item.read===false).length;

    const [socket, setsocket] = useState(null)
    const [message, setmessage] = useState("")
    const [messages, setmessages] = useState([])
    let notificationsLength=notifications.notifications
console.log(navigator.geolocation);
    let {userInfo}=userLogin;
    console.log(userInfo);
    //let id=userInfo.
    const dispatch=useDispatch();
  
    function openMenu() {
        document.querySelector(".sidebar").classList.add("open")
    }



 
useEffect(() => {

    const socketIo=io(baseUrl); 
setsocket(socketIo)
 socketIo.on('connect',(e)=>{
  
console.log(e);


 })

 socketIo.on('notification',(notification)=>{
console.log(notification);
store.dispatch({type:'ADD_NOTIFICATION',notification})
   
   
 })



}, [dispatch])
 


  return (
    <header class="header">
    <div class="brand">
       <Link to="/">busbuddy</Link> 
    </div>
  
    <div class="header-links">
        {
            userInfo ? (
                <div className='options-navbar'>
                     <Link to="/notifications" style={{color: readNotifications===0 ? "#000" : "#ff8000"  }} className='notification-link'>
                    <FaBell size={18} style={{
                        cursor:"pointer"
                    }}/>
                    <sup>
                         
              {
              readNotifications===0 ? null : readNotifications
              }
                    </sup>
                  
                </Link>
               <div className='dropdown'>
                <div className="username-notifications">
           
<p className='username-navbar' >
{`${userInfo.name} ${userInfo.surname}`}  <span className='dropdown-arrow'>&#9660;</span>
</p>
                </div>
           
              
               <div className="dropdown-content">
                <p><button onClick={
                    ()=>dispatch(userLogout())
                    
                } className='dropdown-btn'>Logout</button></p>
                <p><a href="" className='dropdown-btn'>Help Page</a> </p>
               
               </div>
               </div>
          
                </div>
            ) : 
            <>
        

   <Link to="/signin">Sign in</Link>
           </>
        }
       
    </div>
        </header>
  )
}

export default Navbar

{
    /**     <a href="">Call: <span class="contact">
            +263784313785
        </span></a>
        <Link to="/bookings">My bookings</Link>
        <Link to="/signin">Sign in</Link> */
}