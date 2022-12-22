import React from 'react'

const isValidLogin = (state=null,action) => {

   switch (action.type) {
    case "INVALID_LOGIN":
        return false
    case "VALID_LOGIN":
        return true
    case "LOG_OUT_LOGIN":
        return null
    default:
        return state
   }

}

export default isValidLogin