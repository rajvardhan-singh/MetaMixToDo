import React from 'react'
import TaskList from './TaskList'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { changeTab } from '../redux/actions'

const Appointed = () => {

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
      {/* <button>Comment Button</button> */}
      <button className='appointedBtn' onClick={onActive}>Active</button>
      {/* <button onClick={onPending}>Pending</button> */}
      <button onClick={onDone}>Done</button>
      <TaskList tab={currentTab} flag={true} type="appointed"/>
    </div>
  )
}

export default Appointed