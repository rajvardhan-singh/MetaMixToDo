import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
 
import tabReducer from './reducers/tabReducer';
import  userReducer  from './reducers/userReducer';
import  taskReducer from './reducers/taskReducer'
import isValidLogin from './reducers/isValidLogin';
import isValidSignup from './reducers/isValidSignup';



const reducer = combineReducers({
    user:userReducer,
    task:taskReducer,
    isValidLogin:isValidLogin,
    currentTab:tabReducer,
    isValidSignup:isValidSignup
})


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;