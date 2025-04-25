import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { gettrips } from '../redux/actions/trips';
import LazyLoad from "react-lazy-load"
import {baseUrl} from "../redux/actions/baseUrl"
function ImageLoader({thumbnail,original,imageData,item,className}) {
   
    const [src, setsrc] = useState(`data:image/jpeg;base64,${item.thumbnail}`)
const [loaded, setloaded] = useState(false)
useEffect(()=>{
let img=new Image();
img.src=`${baseUrl}${item.newPath}`;
img.onload=()=>{
    setsrc(`${baseUrl}${item.newPath}`)
    setloaded(true)
}
},[item.newPath])
  console.log(item.newPath);
  return (
   <img src={src} alt='Progressive image' className={className} style={{
 
   }}
/>

  )
}

export default ImageLoader


 