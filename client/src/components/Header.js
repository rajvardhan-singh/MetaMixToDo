import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut} from '../redux/actions'

const Header = () => {
  const navigate= useNavigate()
  const username = useSelector(state=>state.user.user)
  const dispatch = useDispatch()

  const logOutHandler=()=>{
    dispatch(logOut())
    navigate('/')
  }
  
  return (
    <div>
      <img href="" alt="metamixlogo"/>
      <h1>ToDo</h1>
      <img href='' alt='userlogo'/>
      <h3>{username}</h3>
      <button onClick={logOutHandler}>LOG OUT</button>
    </div>
  )
}

export default Header