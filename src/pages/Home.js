import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context'
import PriceCard from '../components/cards/PriceCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [prices, setPrices] = useState([])
  const [state, seState] = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    fetchPrice()
  }, [])

  const fetchPrice = async () => {
    const { data } = await axios.get('/prices')
    setPrices(data)
    console.log('prices', data)
  }

  const handleClick = async (e, price) => {
    e.preventDefault()
    if (state && state.token) {
      const { data } = await axios.post(
        'http://localhost:8000/api/create-subscription',
        {
          price: price.id,
        }
      )
      console.log('eeee', data)
      window.open(data)
    } else {
      navigate('/register')
    }
  }

  return (
    <div className="container-fluid align-items-center">
      <div className="row col-md-6 offset-md-3 text-center">
        <h1 className="pt-5 fw-bold">
          Explore the right plan for your business
        </h1>
        <p className="lead pb-4">Choose a plan that suites you best</p>
      </div>
      {/* another row */}
      <div className="row  pt-5 mb-3 text-center">
        {prices &&
          prices.map((single, index) => (
            <PriceCard key={index} price={single} handleClick={handleClick} />
          ))}
      </div>
    </div>
  )
}

export default Home
