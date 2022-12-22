import React from 'react'

const taskReducer = (state=[],action) => {
    switch (action.type) {


        //adding new task to task redux store
        case "ADD_TASK":
            var newState =[]
            for(var i=0;i<state.length;i++){
                newState.push(state[i])
            }
            newState.push({
                data:action.payLoad.data,
                to:action.payLoad.to,
                by:action.payLoad.by,
                date:action.payLoad.date,
                status:'pending'
            })


            return  newState
                    
                 
            
        
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
        case "LOG_OUT_TASK":
            return []
            
        default:
            return state;
    }
}

export default taskReducer;