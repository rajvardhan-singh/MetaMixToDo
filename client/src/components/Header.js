import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../redux/actions'
import '../css/header.css'

const Header = () => {
  const navigate= useNavigate()
  const username = useSelector(state=>state.user.user)
  const dispatch = useDispatch()

  const logOutHandler=()=>{
    dispatch(signUp())
    navigate('/')
  }
  
  return (
    <div className='header'>
      <img src="../images/logoMM.png" alt="metamixlogo" className='metalogo'/>
      <h1 className='title'>ToDo</h1>
      <div>
      <i className="fa fa-user" aria-hidden="true" />
      <h3>username</h3>
      <button className="LogBtn" onClick={logOutHandler}>LOG OUT</button>
      </div>

    </div>
  )
}

export default Header