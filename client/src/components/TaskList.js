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

  const changeToActive=(data)=>{
      dispatch(toActive(data))
  }

  const changeToPending=(data)=>{
      dispatch(toPending(data))
  }
  
  const changeToDone=(data)=>{
     dispatch(toDone(data))
  }

  const changeToDelete=(data)=>{
      dispatch(deleteTask(data))
  }

  return (

    <ul>
      {getTodos().map(task=>(

          <div>

            <h3>{task.data}</h3>
            {props.flag && <h3>{props.type=="appoint"?task.to:task.by}</h3>}

            
            {task.status!=='active' && <button onClick={changeToActive(task.data)}>Active</button>}
            {task.status!=='pending' && <button onClick={changeToPending(task.data)}>Pending</button>}
            {task.status!=='done' && <button onClick={changeToDone(task.data)}>Done</button>}
             
            <button onClick={changeToDelete(task.data)}>Delete</button>
          </div>
       ))

      }
    </ul>
    
  )
}

export default TaskList