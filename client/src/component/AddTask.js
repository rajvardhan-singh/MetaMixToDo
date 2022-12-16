
const AddTask=()=>{
    return(
        <div className="form">
             
            <input class="taskText" type="text"/>
            <div class="taskButton">
                <button class="forMeBtn">For Me</button>
                <button class="forOtherBtn">To Other</button>
            </div>

            <div class="taskButton1">
              <input class="user" type="text" />
              <button class="savebtn">Save</button>
            </div>

        </div>
    )
}

export default AddTask