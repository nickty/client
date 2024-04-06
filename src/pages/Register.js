import React, { useContext, useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [state, seState] = useContext(UserContext)

  const navigate = useNavigate()

  const handleClick = async (e) => {
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
        setName('')
        setEmail('')
        setPassword('')
        toast.success(
          `Hey ${data.user.name}. You are now part of our community, Congrats!`
        )
        localStorage.setItem('auth', JSON.stringify(data))
        seState(data)
        navigate('/')
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
