 

const userReducer = (state={},action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                user:action.payLoad.username,
                email:action.payLoad.email,
                password:action.payLoad.password,
                date:new Date()
            }
        
        case "SIGN_UP":
            return {
                user:action.payLoad.username,
                email:action.payLoad.email,
                password:action.payLoad.password,
                date:new Date()
            }

        case "LOG_OUT":
            return {}

        default:
            return state;
    }
}

export default userReducer