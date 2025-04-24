
import {CANCEL_TRIP_SUCCESS,CANCEL_TRIP_REQUEST,CANCEL_TRIP_FAIL,GET_USER_TRIP_SUCCESS,GET_USER_TRIP_REQUEST,GET_USER_TRIP_FAIL,GET_TRIPS_FAIL,GET_TRIPS_REQUEST,GET_TRIPS_SUCCESS,GET_TRIP_FAIL,GET_TRIP_REQUEST,GET_TRIP_SUCCESS,ADD_PASSENGER_FAIL,ADD_PASSENGER_REQUEST,ADD_PASSENGER_SUCCESS} from "../constants/trips"
import axios from "axios";
import { baseUrl } from "./baseUrl";



export const gettrips =()=>async(dispatch,getState)=>{
  
   
    dispatch({
        type:GET_TRIPS_REQUEST
    });
 
  
   

  
    
    try {
      const temporaryData  =  (await axios.get(`${baseUrl}trip/get-trips`)).data
      let data =temporaryData.reduce((acc,item)=>{
        let key=`${item.from} - ${item.to}`
        if(!acc[key]){
            acc[key]=[];
        }
        acc[key].push(item)
        return acc
    },{}) 

      
         
    
     

   
          
dispatch({type:GET_TRIPS_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
  
        dispatch({type:GET_TRIPS_FAIL,payload:message})
}

   
}


export const gettrip =(id)=>async(dispatch,getState)=>{
  
   
    dispatch({
        type:GET_TRIP_REQUEST
    });
 
  
   

console.log(id);
    
    try {
      const {data}  =  await axios.get(`${baseUrl}trip/get-trip/${id}`)
      
      
         console.log(data);
    
     

   
          
dispatch({type:GET_TRIP_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
  
        dispatch({type:GET_TRIP_FAIL,payload:message})
}

   
}


export const addpassenger=( name,surname,phone,email,from,to,bus,busfare,seatNumber,nextOfKinContactDetails,tripId,idType,idNumber,noOfBags,paymentMethod)=>async(dispatch,getState)=>{
    dispatch({
        type:ADD_PASSENGER_REQUEST
    });

 
    const {
        userLogin: { userInfo },
      } = getState();
    console.log(userInfo);


    
    try {
      const {data}  =  await axios.post(`${baseUrl}trip/add-passenger/${tripId}`,{ name,surname,phone,email,from,to,bus,busfare,seatNumber,nextOfKinContactDetails,tripId,idType,idNumber,noOfBags,paymentMethod},{headers:{        
         
          
        "Authorization":`Bearer ${userInfo.signature}`
}})
      
      
         console.log(data);
    
     

   
          
dispatch({type:ADD_PASSENGER_SUCCESS,payload:data});
     } catch (error) {

        dispatch({type:ADD_PASSENGER_FAIL,payload:error.response.data.msg})
}

}

export const getusertrips=()=>async(dispatch,getState)=>{
  
   
    dispatch({
        type:GET_USER_TRIP_REQUEST
    });
    const {
        userLogin: { userInfo },
      } = getState();
  
   


    console.log(userInfo);
    try {
      const {data}  =  await axios.get(`${baseUrl}trip/get-user-trips`,{
        headers:{  
          
         
          
            "Authorization":`Bearer ${userInfo.signature}`
    }
      })
      
      
         console.log(data);
    
     

   
          
dispatch({type:GET_USER_TRIP_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
  
        dispatch({type:GET_USER_TRIP_FAIL,payload:message})
}

   
 
}
export const cancelusertrips=(id)=>async(dispatch,getState)=>{
  
   
    dispatch({
        type:CANCEL_TRIP_REQUEST
    });
    const {
        userLogin: { userInfo },
      } = getState();
  
   


    
    try { 
      const {data}  =  await axios.delete(`${baseUrl}trip/cancel-trip/${id}`,{
        headers:{  
          
         
          
            "Authorization":`Bearer ${userInfo.signature}`
    }
      })
      
      
      
    
     

   
          
dispatch({type:CANCEL_TRIP_SUCCESS,payload:data});
     } catch (error) {
      
    const message=  error
  
        dispatch({type:CANCEL_TRIP_FAIL,payload:message})
}

   
 
}

