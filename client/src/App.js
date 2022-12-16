import Header from "./component/Header"
import Dates from "./component/Date";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import { useState } from "react";

function App() {
  
  const [click,setClick] =useState(true)

  function handleClick(event){
    setClick((click)=>!click)
  }
  return (
     <div>
      <Header/>
      { click && <><Dates/> <AddTask/></>}
      {!click && <><TaskList/></>}
      <button onClick={handleClick}>I'm Button</button>
     </div>
  );
}

export default App;
