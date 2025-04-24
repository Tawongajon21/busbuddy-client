import React from 'react'
import bg from "../images/photo-ten.jpg"
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {usersignin} from "../redux/actions/user"
import { baseUrlFrontend } from '../frontend-url'
import FormLoading from './FormLoading'
import MainLayout from './MainLayout'
function Signin() {
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")
    const [errorMessage,setErrorMessage]=useState('');
    const location=useLocation()
    let previousLocation=location.state?.from
   
    const dispatch=useDispatch()
    const navigate=useNavigate()
    let userLogin=useSelector((state)=>state.userLogin);
    console.log(userLogin);
    const {loading,error,userInfo}=userLogin;
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)

    }
    const signin=(e)=>{
        e.preventDefault();
 
      if(error){
        
            setErrorMessage(error)
            setTimeout(()=>{
                setErrorMessage('')
            },3500)
        }
        else{
            dispatch(usersignin(email,password))
        }
        
           }

    useEffect(()=>{
        if (userInfo) {
            if (previousLocation) {
                navigate(location.state?.from ?? "/bookings")
                window.location.replace(`${baseUrlFrontend}${previousLocation}`)
            }
           window.location.replace(`${baseUrlFrontend}/`)
        }
       },[userInfo,dispatch])
       console.log(error);
  return (
    <MainLayout>
  <div class="signin">
    <img  src={bg} alt=""  className='image-signin'/>
    <div class="">
        <div class="brand-auth">
            <header className='brand-header'>
                <h3 class="brand">busbuddy </h3>
                <p>
                    <b>Sign-in</b>
                </p>
            </header>
            {
                errorMessage&& <p className='form-error'>
{errorMessage}
                </p>
            }
            {
             loading && <FormLoading/>
            }
        </div>
        <form onSubmit={signin} class="auth-form">
      
            <div className='input-item'>
                <label for="">Email</label>
                <input  onChange={(e)=>setEmail(e.target.value)} type="text"/>
            </div>
       
            <div className='input-item'>
                <label for="">Password</label>
                <input  onChange={handlePasswordChange} type="password"/>
            </div>
         
            <div className='input-item'>
                <button id='signin-btn' className='signin-btn'>
                    Sign in
                </button>
            </div>
            <div >
                <p>
                    New user ? <Link to="/signup">Register</Link>
                </p>
            </div>
        </form>
    </div>
  </div>
    </MainLayout>
  
  )
}

export default Signin