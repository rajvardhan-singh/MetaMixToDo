import React from 'react'
import CurrentDate from '../components/CurrentDate'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import TaskForm from '../components/TaskForm'

const AddTask = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <CurrentDate/>
      <TaskForm/>
    </div>
  )
}

export default AddTask