import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddTask from './pages/AddTask';
import AssignedTask from './pages/AssignedTask';
import AssignTask from './pages/AssignTask';
import LoginPage from './pages/LoginPage';
import PersonalTask from './pages/PersonalTask';
import SignupPage from './pages/SignupPage';
 
import Error from './pages/Error';
import Home from './pages/Home';


function App() {
  
   
  return (
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}>

            <Route index element={<LoginPage/>}/>
            <Route path='signup' element={<SignupPage/>}/>
            <Route path='addtask' element={<AddTask/>}/>
            <Route path='personaltask' element={<PersonalTask/>}/>
            <Route path='assigntask' element={<AssignTask/>}/>
            <Route path='assignedtask' element={<AssignedTask/>}/>
            <Route path='*' element={<Error/>}/>

          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
