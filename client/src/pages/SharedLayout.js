import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import NavBar from '../components/Navbar'
import CurrentDate from '../components/CurrentDate'

const SharedLayout = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <CurrentDate/>
      <Outlet/>
    </div>
  )
}

export default SharedLayout