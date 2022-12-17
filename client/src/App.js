import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddTask from './pages/AddTask';
import AssignedTask from './pages/AssignedTask';
import AssignTask from './pages/AssignTask';
import LoginPage from './pages/LoginPage';
import PersonalTask from './pages/PersonalTask';
import SignupPage from './pages/SignupPage';
import SharedLayout from './pages/SharedLayout';


function App() {
  
   
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<LoginPage/>}/>
            <Route path='signup' element={<SignupPage/>}/>
            <Route path='addtask' element={<AddTask/>}/>
            <Route path='personaltask' element={<PersonalTask/>}/>
            <Route path='assigntask' element={<AssignTask/>}/>
            <Route path='assignedtask' element={<AssignedTask/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
