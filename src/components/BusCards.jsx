import React from 'react'
import BusCard from './bus-card'

import { useEffect,useMemo } from 'react';

import { useDispatch,useSelector } from 'react-redux'
import { gettrips } from '../redux/actions/trips';
import FormLoading from './FormLoading';
import ErrorPage from './ErrorPage'
function BusCards() {
  const dispatch=useDispatch();
  const trips=useSelector((state)=>state.getTrips);

  let {loading,error,data}=trips;


  useEffect(() => {
    dispatch(gettrips())


    }, [gettrips])
  
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
    
      loading ?  <div className='data-loading'><FormLoading/></div> : error ? <ErrorPage/>:

    
    <>
    {
 Object.keys(memoizedData).map((key)=>(
    <div className='bus-grid'>

   <header  >
      
<h3 className='h3-heading'>
{key}
</h3>

</header>

<div className="bus-cards">


{
    memoizedData[key].map((item)=>(
 <BusCard item={item} bus={item.bus} key={item._id} id={item._id} image={item.image} busName={item.busName} to={item.to} from={item.from} busFare={item.busfare}/>
   
    ))
}
</div>
</div>

  ))     
   

    }
 
        </>
  )
}

export default BusCards