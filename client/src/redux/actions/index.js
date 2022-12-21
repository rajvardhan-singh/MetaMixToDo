import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

//backened server
const API_URL ="http://192.168.0.34:8000"


//All API call


//on login
export const logIn=(data)=>async(dispatch)=>{
    // const navigate  =useNavigate()
    try{
        console.log(data)
        const res = await axios.post(`${API_URL}/login`,data);
        console.log(res.data)
        dispatch({type:"LOG_IN", payLoad:res.data});
    }catch (error) {
        console.log("Error")
        dispatch({type:"VALID_LOGIN"})
         
    }
}

//on sigin
export const signUp=(data)=>async(dispatch)=>{
    try{
        console.log(data)
        const res = await axios.post(`${API_URL}/signup`,data);
        
        dispatch({type:"SIGN_UP", payLoad:res.data});
    }catch (error) {
        console.log("Error")
        dispatch({type:"VALID_SIGNUP"})
    }
}

export const logOut=()=>async(dispatch)=>{
    try{
        // const res = await axios.post(`${API_URL}/signup`,data);
        // console.log(data)
        dispatch({type:"LOG_OUT"});
    }catch (error) {
         console.log("Error")
    }
}



//new task add 
export const addTask=(data)=>async(dispatch)=>{
    try{
        console.log(data)
        const res = await axios.put(`${API_URL}/addtask`,data);
        console.log(res.data)
        dispatch({type:"ADD_TASK", payLoad:data});
    }catch (error) {
        console.log("Error")
        console.log(data)
        dispatch({type:"ADD_TASK", payLoad:data});
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