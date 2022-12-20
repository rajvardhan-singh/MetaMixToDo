import React from 'react'

const tabReducer=(state='active',action) => {
   switch (action.type) {
    case "ACTIVE":
        return 'active'

    case "PENDING":
        return 'pending'

    case "DONE":
        return 'done'
   
    default:
        return state
   }
}

export default tabReducer