import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuth } from '../utils/func'

const Nav = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('auth')
    navigate('/login')
  }
  return (
    <ul className="nav border">
      <li>
        <Link className="nav-link" aria-current="page" to="/">
          Home
        </Link>
      </li>

      {isAuth() ? (
        <>
          <li>
            <span onClick={logout} className="nav-link">
              Logout
            </span>
          </li>
        </>
      ) : (
        <>
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
        </>
      )}
    </ul>
  )
}

export default Nav
