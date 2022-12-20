import React from 'react'
 
import Appointed from '../components/Appointed'
import CurrentDate from '../components/CurrentDate'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
const AssignedTask = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <CurrentDate/>
      <Appointed/>
    </div>
  )
}

export default AssignedTask