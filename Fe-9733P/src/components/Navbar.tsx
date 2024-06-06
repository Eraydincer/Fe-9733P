import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav>
    <li><Link to="/">anasayfa</Link></li>
    <li><Link to="/users">Users</Link></li>
  </nav>

  ) 
}

export default Navbar