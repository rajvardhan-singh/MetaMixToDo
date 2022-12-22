import React from 'react'

const isValidSignup = (state=null,action) => {

   switch (action.type) {
    case "INVALID_SIGNUP":
        console.log("inside isValidSignup")
        return false
    case "VALID_SIGNUP":
        console.log("makle valid")
        return true
    case "LOG_OUT_SIGNUP":
        return null
    default:
        return state
   }

}
export default isValidSignup