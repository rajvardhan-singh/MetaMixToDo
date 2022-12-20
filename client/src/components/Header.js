import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate= useNavigate()

  const logOutHandler=()=>{
    navigate('/')
  }
  
  return (
    <div>
      <img href="" alt="metamixlogo"/>
      <h1>ToDo</h1>
      <img href='' alt='userlogo'/>
      <h3>username</h3>
      <button onClick={logOutHandler}>LOG OUT</button>
    </div>
  )
}

export default Header