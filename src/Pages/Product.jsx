import React from 'react'
import chair from "../images/chair.png"
import { useNavigate } from 'react-router-dom'

const data = [
  {
    id: 1,
    name: 'Amazon Basics Adjustable 14-Position 41-inch Memory Foam Floor Chair - Navy, 41.3"D x 21.3"W x 6"H',
    image: chair,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 200
  },
]

const Product = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div 
      onClick={ () => navigate('/product/chair-rolex', {state: {data}}) }
      style={{backgroundColor: 'gray', width: '200px', textAlign:'center', borderRadius: '5px', marginTop: '2rem'}}>
        <img src={chair} alt="Chair" width="200" />
        <h2>Chair</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default Product
