import React from 'react'
import '../css/myTask.css'
import '../css/taskList.css' 
import TaskList from './TaskList'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { changeTab } from '../redux/actions'

const Appoint = () => {

  const currentTab =useSelector(state=>state.currentTab)
  const dispatch = useDispatch()

  
  
  const onActive=()=>{
    dispatch(changeTab("ACTIVE"))
  }

  const onPending=()=>{
    dispatch(changeTab("PENDING"))
  }

  const onDone=()=>{
    dispatch(changeTab("DONE"))
  }

  return (
    <div className='task'>
      <div className='tab'>
      <button className='ABtn' onClick={onActive}>Active</button>
      <button className='PBtn' onClick={onPending}>Pending</button>
      <button className='DBtn' onClick={onDone}>Done</button>
      </div>
      <TaskList tab={currentTab} flag={true} type="appoint"/>
    </div>
  )
}

export default Appoint