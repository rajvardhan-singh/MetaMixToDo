import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, toActive, toDone, toPending } from '../redux/actions'

const TaskList = (props) => {

  const task = useSelector(state=>state.task)
  const dispatch =useDispatch()

  //decide which task to render 
  const getTodos = () => {
    if (props.tab === 'active') {
        return task.filter(todo=>todo.status==='active')
    } else if (props.tab === 'pending') {
        return task.filter(todo => todo.status==='pending')
    } else if (props.tab === 'done') {
        return task.filter(todo => todo.status==='done')
    }
  }

  const changeToActive=(taskname)=>{
      dispatch(toActive(taskname))
  }

  const changeToPending=(taskname)=>{
      dispatch(toPending(taskname))
  }
  
  const changeToDone=(taskname)=>{
     dispatch(toDone(taskname))
  }

  const changeToDelete=(taskname)=>{
      dispatch(deleteTask(taskname))
  }

  return (

    <ul>
      {getTodos().map(task=>(

          <div>

            <h3>{task.taskname}</h3>
            {props.flag && <h3>{props.type=="appoint"?task.to:task.by}</h3>}

            
            {task.status!=='active' && <button onClick={changeToActive(task.taskname)}>Active</button>}
            {task.status!=='pending' && <button onClick={changeToPending(task.taskname)}>Pending</button>}
            {task.status!=='done' && <button onClick={changeToDone(task.taskname)}>Done</button>}
             
            <button onClick={changeToDelete(task.taskname)}>Delete</button>
          </div>
       ))

      }
    </ul>
    
  )
}

export default TaskList