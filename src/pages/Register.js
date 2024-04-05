import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import toast from 'react-hot-toast'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState('mizan')
  const [email, setEmail] = useState('mizan@gmail.com')
  const [password, setPassword] = useState('124578')

  const handleClick = async (e) => {
    console.log(name, email, password)
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password,
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('Registration successfull! Please login')
      }
    } catch (error) {
      console.log(error)
      toast.error('something went wrong')
    }
  }

  return (
    <div className="d-flex justify-content-center" style={{ height: '88vh' }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Let's get started</h1>
          <p className="lead pb-4">
            Sign up for free, no credit card required.
          </p>
          <div className="form-group">
            <Input label="name" value={name} setValue={setName} />
            <Input
              label="email"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <Input
              label="password"
              type="password"
              value={password}
              setValue={setPassword}
            />

            <div className="d-grid">
              <Button handleClick={handleClick} text="Register" size="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
