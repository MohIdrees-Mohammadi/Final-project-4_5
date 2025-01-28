import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css"

import Home from "./Pages/Home"



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  
])


const App = () => {
  return (
    <RouterProvider router = {router} />
  )
}

export default App
