import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dateTask } from '../redux/actions'

const CurrentDate = () => {
  const [currentDates,setCurrentDates] = useState(new Date().toDateString())  
  const dispatch = useDispatch()

  const datePickHandler=(event)=>{
      setCurrentDates(event.target.value)
      dispatch(dateTask(currentDates))
  }
  return (

   
    <div>
      <h3>{currentDates}</h3>
      <input type='date' onChange={datePickHandler}/>
    </div>
  )
}

export default CurrentDate
