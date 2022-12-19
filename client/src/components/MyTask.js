import React from 'react'
import { useSelector } from 'react-redux'
import TaskList from './TaskList'

const MyTask = () => {

  //const tasklist = useSelector(state=>state.task)
  const currentTab =useSelector(state=>state.currentTab)
  const task = useSelector(state=>state.task)

  return (
    <div>
      <button>Active</button>
      <button>Pending</button>
      <button>Done</button>
      <TaskList tab={currentTab}/>
    </div>
  )
}

export default MyTask