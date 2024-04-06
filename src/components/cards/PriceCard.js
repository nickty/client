import React, { useContext } from 'react'
import { UserContext } from '../../context'

const PriceCard = ({ price, handleClick }) => {
  const [state, seState] = useContext(UserContext)

  const buttonText = () => {
    return state && state.token ? 'Buy the plan' : 'Sign Up'
  }
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">
            {price.unit_amount_decimal == 2500 && 'Basic'}
            {price.unit_amount_decimal == 5900 && 'Standard'}
            {price.unit_amount_decimal == 15000 && 'Premium'}
          </h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            {(price.unit_amount_decimal / 100).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
            <small className="text-muted fw-light">/mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>5 exlusive storkce</li>
            <li>5 exlusive storkce</li>
            <li>5 exlusive storkce</li>
            <li>5 exlusive storkce</li>
            <li>5 exlusive storkces</li>
          </ul>
          <button
            onClick={(e) => handleClick(e, price)}
            className="w-100 btn-lg btn-outline-danger"
          >
            {buttonText()}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PriceCard
