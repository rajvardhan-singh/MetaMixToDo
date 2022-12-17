import React from 'react'

const CurrentDate = () => {
  const currentTask =new Date.toString()
  return (
    <div>
      <h3>{currentTask}</h3>
      <input type='date'>date-Picker</input>
    </div>
  )
}

export default CurrentDate
