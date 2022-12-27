import React from "react";
import {Alert,Button} from 'react-bootstrap'
import { useState } from "react";
import './home.css'

const Home=()=>{
    const [show, setShow] = useState(false);
    return(
        <div>
           <Alert className="mt-4" show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
        To-do lists offer a way to increase productivity, stopping you from
         forgetting things, helps prioritise tasks, manage tasks effectively, 
         use time wisely and improve time management as well as workflow.
         One of the most important reasons you should use a to do list is that 
         it will help you stay organised. When you write all your tasks in a list,
         they seem more manageable. When you've got a clear outline of the tasks
         you've got to do and those you've completed, it helps you stay focused.
         While freeing up space in your mind for other more creative tasks.
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <div className="d-flex justify-content-center"><Button size="lg" className="mt-4" variant="info" onClick={() => setShow(true)}>About This App</Button></div>}
        </div>
    )
}

export default Home;