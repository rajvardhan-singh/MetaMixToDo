import React, { useState, useEffect } from 'react';

import {Navbar,Container,Button,Nav} from 'react-bootstrap'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import mmLogo from '../../images/logoMM.png';
import * as actionType from '../../constants/actionTypes';
import './header.css'


const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();


  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  const signInHandler=()=>{
    history.push('/auth')
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
      <Navbar  bg="light" variant="light" className='mt-4 header' expand="lg">
      
          <Navbar.Brand href="/">
            <img 
              alt=""
              src={mmLogo}
              width="60"
              height="60"
              className="d-inline-block logo"
            />{' '}
            Todo List
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <>

              <Navbar.Collapse id="basic-navbar-nav">
              {user?.result?(
              <Nav variant='' className="me-auto">
                <Nav.Item>
                <Nav.Link href="/tasks">Task Form</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link href="/personaltask" eventKey="link-1">Personal Task</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link href="/assigntask" eventKey="link-2">Tasks for Me</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link href="/assignedtask" eventKey="link-3">Tasks for Other</Nav.Link>
                </Nav.Item>
              </Nav>
              ):(null)}
              
              <Nav variant='' className="me-auto">
              {user?.result?(
              <div>
             <Button variant="danger" className='logoutBtn'
             onClick={logout}>Logout</Button>
             </div>
            ):(
            <Button component={Link} to="/auth" onClick={signInHandler} variant="success" className='authbtn' >Sign In</Button>
            )}
            </Nav>


            </Navbar.Collapse>
            
          </>
      </Navbar>
   </>
  );
};

export default Header;