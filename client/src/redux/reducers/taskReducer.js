import React from 'react'

const taskReducer = (state=[],action) => {
    switch (action.type) {


        //adding new task to task redux store
        case "ADD_TASK":
            const task =[...state,
                    {
                        taskname:action.payLoad.taskname,
                        to:action.payLoad.userTo,
                        by:action.payLoad.userBy,
                        date:action.payLoad.date,
                        status:'active'
                    }
                ];
            return task
      
        default:
            return state;
    }
}

export default taskReducer;