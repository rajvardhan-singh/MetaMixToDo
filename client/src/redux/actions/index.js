import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

//backened server
const API_URL ="https//:192.168.0.34:8000"

//All API call


//on login
export const logIn=(data)=>async(dispatch)=>{
    try{
        console.log(data)
       const res = await axios.post(`${API_URL}/login`,data);

        if(res.data==="ERROR"){
            dispatch({type:"VALID_LOGIN"})
        }else{
            dispatch({type:"LOG_IN", payLoad:res.data});
        }
        dispatch({type:"VALID_LOGIN"})
        
    }catch (error) {
        console.log("Error")
    }
}

//on sigin
export const signUp=(data)=>async(dispatch)=>{
    try{
        const res = await axios.post(`${API_URL}/signup`,data);
        dispatch({type:"SIGN_UP", payLoad:res.data});
    }catch (error) {
        console.log("Error")
    }
}

//new task add 
export const addTask=(data)=>async(dispatch)=>{
    try{
        // console.log(data)
        const res = await axios.put(`${API_URL}/addtask`,data);
        dispatch({type:"ADD_TASK", payLoad:data});
    }catch (error) {
        console.log("Error")
    }
}


// new date selecetd
export const dateTask=(data)=>async(dispatch)=>{
    try{

        console.log(data)
        // const res = await axios.post(`${API_URL}/datetask`,data);
        // dispatch({type:"DATE_TASK", payLoad:res.data});
    }catch (error) {
        console.log("Error")
    }
}

// Status Change To Active
export const toActive=(taskname)=>async(dispatch)=>{
    try{
        const res = await axios.post(`${API_URL}/toggleToActive`)
        dispatch({type:"CHANGE_TO_ACTIVE", payLoad:taskname});
    }catch(error){
        console.log("ERROR")
    }
}

// Status Change To pending
export const toPending=(taskname)=>async(dispatch)=>{
    try{
        const res = await axios.post(`${API_URL}/toggleToPending`)
        dispatch({type:"CHANGE_TO_PENDING", payLoad:taskname});
    }catch(error){
        console.log("ERROR")
    }
}

// Status Change To Done
export const toDone=(taskname)=>async(dispatch)=>{
    try{
        const res = await axios.post(`${API_URL}/toggleToDone`)
        dispatch({type:"CHANGE_TO_DONE", payLoad:taskname});
    }catch(error){
        console.log("ERROR")
    }
}


 


//Toggle To Delete
export const deleteTask=(data)=>async(dispatch)=>{
    try{
        const res = await axios.post('${API_URL}/deleteTask',data);
        dispatch({type:"DELETE", payLoad:data});
    }catch (error) {
        console.log("Error")
    }
}

//Change Tab
export const changeTab=(data)=>async(dispatch)=>{
    try {
        dispatch({type:data})
    } catch (error) {
        console.log("ERROR")
        
    }
}