import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { addTask } from '../redux/actions'
import {useDispatch} from 'react-redux'

const TaskForm = () => {
   
  //state declaration
  const [flag,setFlag] = useState(false)
  const [taskname,setTaskname]= useState("")
  const [to,setTo] = useState("")
  const assignUser = to

  const date = useSelector(state=>state.user.date)
  const by = useSelector(state=>state.user.user)
   
  
  const dispatch =useDispatch()

  //on task input chnage
  const onTasknameChange=(event)=>{
    setTaskname(event.target.value)
  }
  
  //on For Me button Click
  // const onForMeButton=()=>{
  //   setUserto(currentUser)
  //   submitTask()
  // }

  //on For other button
  const onForOtherButton=()=>{
    setFlag(state=>!state)
  }

   //on username input chnage
   const onUsernameChange=(event)=>{
    setTo(event.target.value)
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
        by:by,
        to:!flag?by:assignUser,
        date:date ,
        status:"pending" 
      }))
    
      //setting user and taskname to default again
    //setTo("")
    //setTaskname("")
  }


  return (

    <form onSubmit={submitTask}>
      <input type='text' onChange={onTasknameChange} />
      <button type="submit">For Me</button>
      <button type="button" onClick={onForOtherButton}>For Other</button>

      
      {flag &&
        <> 
          <input type='text' onChange={onUsernameChange}/>
          <button onClick={onSaveButton}>Save</button>
        </>
}
      
    </form>

  )
}

export default TaskForm