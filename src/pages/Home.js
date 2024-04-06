import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context'
import PriceCard from '../components/cards/PriceCard'
import axios from 'axios'

const Home = () => {
  const [prices, setPrices] = useState([])

  useEffect(() => {
    fetchPrice()
  }, [])

  const fetchPrice = async () => {
    const { data } = await axios.get('/prices')
    setPrices(data)
    console.log('prices', data)
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log(e)
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
