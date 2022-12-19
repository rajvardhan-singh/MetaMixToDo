import axios from 'axios'

//backened server
const APT_URL ="a"

//All API call

//on login
export const logIn=(data)=>async(dispatch)=>{
    try{
        const res = await axios.post('${API_URL}/login',data);
        dispatch({type:"LOG_IN", payLoad:res.data});
    }catch (error) {
        console.log("Error")
    }
}

//on sigin
export const signUp=(data)=>async(dispatch)=>{
    try{
        const res = await axios.post('${API_URL}/signup',data);
        dispatch({type:"SIGN_UP", payLoad:res.data});
    }catch (error) {
        console.log("Error")
    }
}

//new task add 
export const addTask=(data)=>async(dispatch)=>{
    try{
        const res = await axios.put('${API_URL}/addtask',data);
        dispatch({type:"ADD_TASK", payLoad:data});
    }catch (error) {
        console.log("Error")
    }
}


// new date selecetd
export const dateTask=(data)=>async(dispatch)=>{
    try{
        const res = await axios.post('${API_URL}/datetask',data);
        dispatch({type:"DATE_TASK", payLoad:res.data});
    }catch (error) {
        console.log("Error")
    }
}

// Toggle Tab
export const toggleTab=(tab)=>async(dispatch)=>{
    dispatch({type:"TOGGLE_TAB", selectedTab:tab});
}


 


//Toggle To Delete
export const deleteTask=(data)=>async(dispatch)=>{
    try{
        const res = await axios.post('${API_URL}/delete',data);
        dispatch({type:"DELETE", payLoad:data});
    }catch (error) {
        console.log("Error")
    }
}