import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  const navigate = useNavigate()
  return (
    <div>
      <h1>{error.status}</h1>
      <h1>{error.statusText}</h1>
      <h1>{error.error.message}</h1>
      <button onClick={()=> navigate("/")}>Home</button>
      <button onClick={()=> navigate(-1)}>Back</button>
    </div>
  )
}

export default Error
