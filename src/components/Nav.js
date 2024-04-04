import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className="nav border">
      <li>
        <Link className="nav-link" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  )
}

export default Nav
