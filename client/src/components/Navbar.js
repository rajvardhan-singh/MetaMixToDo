import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/addtask'>Task form</Link>
      <Link to='/personaltask'>My Task</Link>
      <Link to='/assigntask'>Appoint Task</Link>
      <Link to='/assignedtask'>Appointed task</Link>
    </nav>
  )
}

export default Navbar