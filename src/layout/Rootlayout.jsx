import React from 'react'
import NavBar from '../component/nav'
import { Outlet } from 'react-router-dom'


const Rootlayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default Rootlayout;