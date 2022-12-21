import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { addTask } from '../redux/actions'
import {useDispatch} from 'react-redux'

const TaskForm = () => {
   
  //state declaration
  const [flag,setFlag] = useState(false)
  const [taskname,setTaskname]= useState("")
  const [to,setTo] = useState("")
  var isUser= false


  const date = useSelector(state=>state.user.date)
  const user = useSelector(state=>state.user.user)
   
  
  const dispatch =useDispatch()

  //on task input chnage
  const onTasknameChange=(event)=>{
    setTaskname(event.target.value)
  }
  
  //on ForMebutton Click
  const onForMeHandler=(event)=>{
    // console.log(setTo(user))
    isUser =true
    submitTask(event)
  }

  //on For other button
  const onForOtherButton=()=>{
    setFlag(state=>!state)
  }

   //on username input chnage
   const onUsernameChange=(event)=>{
    setTo(event.target.value)
  }

  // on save
  const onSave=(event)=>{
    isUser =false
    submitTask(event)
  }


  //on Form submit
  const submitTask=(event)=>{
    //Api call
    event.preventDefault()
    
    
    dispatch(addTask(
      { taskname:taskname,
        by:user,
        to:isUser?user:to,
        date:date ,
        status:"pending" 
      }))
    
      //setting user and taskname to default again
    setTo("")
    setTaskname("")
  }


  return (

    <form onSubmit={submitTask}>
      <input type='text' onChange={onTasknameChange} placeholder="Add Task" value={taskname}/>
      <button type="button" onClick={onForMeHandler}>For Me</button>
      <button type="button" onClick={onForOtherButton}>For Other</button>

      
      {flag &&
        <> 
          <input type='text' onChange={onUsernameChange} placeholder="User Name" value={to}/>
          <button type ='button' onClick={onSave}>Save</button>
        </>
      }  
      
    </form>

  )
}

export default TaskForm