import React from 'react'
import CafeMenu from '../component/cafemenu';
import { Outlet } from 'react-router-dom';
import '../styles/style1.css';
import UncontrolledExample from '../component/menucarousel';

const MenuLayout = () => {
  return (
    <>
    <UncontrolledExample/>
    <CafeMenu/>
    <Outlet/>
    </>
  )
}

export default MenuLayout