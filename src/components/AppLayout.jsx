import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
function AppLayout() {
  return (
    <>
<Navbar/>
<Outlet/>

    </>
  )
}

export default AppLayout