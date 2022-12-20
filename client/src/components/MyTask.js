import React from 'react'
import { useSelector } from 'react-redux'
import TaskList from './TaskList'
import {useDispatch} from 'react-redux'
import { changeTab } from '../redux/actions'

const MyTask = () => {

  //const tasklist = useSelector(state=>state.task)
  //const task = useSelector(state=>state.task)

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
    <div>
      <button onClick={onActive}>Active</button>
      <button onClick={onPending}>Pending</button>
      <button onClick={onDone}>Done</button>

      <TaskList tab={currentTab} flag={false} type="mylist"/>
    </div>
  )
}

export default MyTask