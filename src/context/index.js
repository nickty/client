import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: '',
  })

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'))
    if (storedAuth && storedAuth.token) {
      axios.defaults.baseURL = process.env.REACT_APP_API
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${storedAuth.token}`
      setState(storedAuth)
    }
  }, [])

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
