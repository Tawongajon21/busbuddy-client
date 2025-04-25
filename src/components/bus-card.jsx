import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { gettrips } from '../redux/actions/trips';
import LazyLoad from "react-lazy-load"
import ImageLoader from './ImageLoader';
import {baseUrlFrontend} from "../frontend-url"
import {baseUrl} from "../redux/actions/baseUrl"
function BusCard({to,from,item}) {

  console.log(item.bus);
  let newImageArray
  let getImages=item.bus.map((item)=>{
    newImageArray= item.images
  })
 



  return (
    <div className='card'>
      {
newImageArray.map((item,index)=>(
<ImageLoader key={index} className={"bus-image"}  imageData={newImageArray} item={item} thumbnail={`${baseUrl}${item.thumbnail}`} original={`${baseUrl}${item.newPath}`} />
))
      }
    

<ul className='ul-card'>
    <li ><h3>{item.bus[0].company} {item.bus[0].busName}</h3></li>
    <li>To : {to}</li>
    <li>From : {from}</li>
    <li>Price : ${item.busfare}</li>
    <li>
        <Link id='more-button' className='form-search-btn' to={`/single-trip/${item._id}`}>More</Link>
    </li>
</ul>
    </div>
  )
}

export default BusCard