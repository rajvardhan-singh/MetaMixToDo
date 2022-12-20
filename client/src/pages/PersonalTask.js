import React from 'react'
import CurrentDate from '../components/CurrentDate'
import Header from '../components/Header'
import MyTask from '../components/MyTask'
import Navbar from '../components/Navbar'

const PersonalTask = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <CurrentDate/>
      <MyTask/>
    </div>
  )
}

export default PersonalTask