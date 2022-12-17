import React from 'react'
import TaskList from './TaskList'

const Appointed = () => {
  return (
    <div>
      <button>Active</button>
      <button>Pending</button>
      <button>Done</button>
      <TaskList/>
    </div>
  )
}

export default Appointed