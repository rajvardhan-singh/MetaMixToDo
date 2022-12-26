import React from 'react'

const isValidSignup = (state=true,action) => {

   switch (action.type) {
    case "VALID_SIGNUP":
        return false
   
    default:
        return state
   }

}
export default isValidSignup