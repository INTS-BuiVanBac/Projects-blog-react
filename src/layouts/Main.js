import React from 'react'
import SideBar from './SideBar'
import Header from "./Header";
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Header/>
      <div id="layoutSidenav">
        <SideBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Main
