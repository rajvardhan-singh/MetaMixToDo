import React from 'react'

const isValidLogin = (state=true,action) => {

   switch (action.type) {
    case "VALID_LOGIN":
        return false
    default:
        return state
   }

}

export default isValidLogin