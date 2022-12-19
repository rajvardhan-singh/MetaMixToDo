import React from 'react'

const tabReducer=(state='active',action) => {
   switch (action.type) {
    case "TOGGLE_TAB":
        return action.selectedTab
   
    default:
        return state
   }
}

export default tabReducer