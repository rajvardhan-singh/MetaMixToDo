import React from 'react'

import Appoint from  '../components/Appoint'
import CurrentDate from '../components/CurrentDate'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const AssignTask = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <CurrentDate/>
      <Appoint/>
    </div>
  )
}

export default AssignTask