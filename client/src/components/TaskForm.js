import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { addTask } from '../redux/actions'
import {useDispatch} from 'react-redux'

const TaskForm = () => {
   
  //state declaration
  const [flag,setFlag] = useState(false)
  const [taskname,setTaskname]= useState("Enter Task")
  const [userTo,setUserto] = useState("Enter User")
  const date = useSelector(state=>state.user.date)
  const userBy = useSelector(state=>state.user.username)
  const currentUser= useSelector(state=>state.user.username)
  
  const dispatch =useDispatch()

  //on task input chnage
  const onTasknameChange=(event)=>{
    setTaskname(event.target.value)
  }
  
  //on For Me button Click
  const onForMeButton=()=>{
    setUserto(currentUser)
    submitTask()
  }

  //on For other button
  const onForOtherButton=()=>{
    setFlag(state=>!state)
  }

   //on username input chnage
   const onUsernameChange=(event)=>{
    setUserto(event.target.value)
  }

  //on Save Button
  const onSaveButton=(event)=>{
    submitTask()
  }

  //on Form submit
  const submitTask=(event)=>{
    //Api call
    event.preventDefault()

    dispatch(addTask(
      { taskname:taskname,
        userBy:userBy,
        userTo:userTo,
        date:date  
      }))
    
      //setting user and taskname to default again
    setUserto("")
    setTaskname("")
  }


  return (

    <form onSubmit={submitTask}>
      <input type='text' onChange={onTasknameChange} value={taskname}/>
      <button onClick={onForMeButton}>For Me</button>
      <button onClick={onForOtherButton}>For Other</button>

      /*if task for other user render this*/
      {flag &&
        <> 
          <input type='text' onChange={onUsernameChange} value={userTo}/>
          <button onClick={onSaveButton}>Save</button>
        </>
      }
    </form>

  )
}

export default TaskForm