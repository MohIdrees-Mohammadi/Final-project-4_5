import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css"

import Home from "./Pages/Home"
import Service from "./Pages/Service"
import MainPage from "./Pages/MainPage"
import Feedback from "./Pages/Feedback"
import Contactus from "./Pages/Contactus"
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Error from './Pages/Error'
import Product from './Pages/Product'
import ProductDetails from './Pages/ProductDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/service',
        element: <Service />,
      },
      {
        path: '/feedback',
        element: <Feedback />,
      },
      {
        path: '/contact-us',
        element: <Contactus />,
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/product/:id',
        element: <ProductDetails />
      }

  
      
    ]
  },
  {
    path: '/sign-in',
    element: <Signin />,
  },
  {
    path: '/sign-up',
    element: <Signup />
  },
 
  

])


const App = () => {
  return (
    <RouterProvider router = {router} />
  )
}

export default App
