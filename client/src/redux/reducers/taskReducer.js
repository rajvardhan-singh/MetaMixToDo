import React from 'react'

const taskReducer = (state=[
        {
            taskname:"dreink",
            to:"Raj",
            by:"Pranav",
            status:"pending"
        
        },{
            taskname:"eatk",
            to:"Raj",
            by:"Pranav",
            status:"done"
        
        },{
            taskname:"lunch",
            to:"Raj",
            by:"Pranav",
            status:"active"
        
        }
        ],action) => {
    switch (action.type) {


        //adding new task to task redux store
        case "ADD_TASK":
            return [...state,
                    {
                        taskname:action.payLoad.taskname,
                        to:action.payLoad.to,
                        by:action.payLoad.by,
                        date:action.payLoad.date,
                        status:'pending'
                    }
                ];
            
        
        case "LOG_IN":
            return action.payLoad
        
        case "DATE_TASK":
            return action.payLoad

        case "CHANGE_TO_ACTIVE":
            state = state.map(function(s){
                if(s.taskname===action.payload) s.status='active';
                return s
            })
            return state
            
        case "CHANGE_TO_PENDING":
            state = state.map(function(s){
                if(s.taskname===action.payload) s.status='pending'
                return s
            })
             return state
        case "CHANGE_TO_DONE":
            state = state.map(function(s){
                if(s.taskname===action.payload) s.status='done'
                 return s
            })
            return state

        default:
            return state;
    }
}

export default taskReducer;