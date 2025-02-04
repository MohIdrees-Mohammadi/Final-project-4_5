import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const params = useParams()
  const location = useLocation()
  console.log(location.state.data)
  return (
    <div>
      <h1>{params.id}</h1>
      <h2>{location.state.data[0].name}</h2>
      <h3>{location.state.data[0].price}</h3>
      <h3>{location.state.data[0].description}</h3>
      <img src={location.state.data[0].image} alt="" />
    </div>
  )
}

export default ProductDetails
